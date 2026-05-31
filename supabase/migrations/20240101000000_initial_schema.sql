-- Initial Schema for Rooh

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table (extends Supabase auth.users)
CREATE TABLE public.users (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT,
  tier TEXT DEFAULT 'spark' CHECK (tier IN ('spark', 'flame', 'eternal', 'forever')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Couples table (linking two users)
CREATE TABLE public.couples (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id_1 UUID REFERENCES public.users(id) ON DELETE CASCADE,
  user_id_2 UUID REFERENCES public.users(id) ON DELETE SET NULL,
  partner_name TEXT, -- Fallback if partner hasn't joined
  anniversary_date DATE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Game Sessions
CREATE TABLE public.game_sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  couple_id UUID REFERENCES public.couples(id) ON DELETE CASCADE,
  game_type TEXT NOT NULL, -- '36_questions', 'compatibility', etc.
  progress JSONB DEFAULT '{}',
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Memory Pages (The websites)
CREATE TABLE public.memory_pages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  couple_id UUID REFERENCES public.couples(id) ON DELETE CASCADE,
  slug TEXT UNIQUE NOT NULL,
  content_json JSONB NOT NULL DEFAULT '{}',
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Purchases
CREATE TABLE public.purchases (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  tier TEXT NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  razorpay_payment_id TEXT,
  razorpay_order_id TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS Policies
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.couples ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.game_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.memory_pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.purchases ENABLE ROW LEVEL SECURITY;

-- Users can only read and update their own profile
CREATE POLICY "Users can view own profile" ON public.users FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.users FOR UPDATE USING (auth.uid() = id);

-- Couples policies
CREATE POLICY "Users can view their couple data" ON public.couples FOR SELECT USING (auth.uid() = user_id_1 OR auth.uid() = user_id_2);
CREATE POLICY "Users can insert their couple data" ON public.couples FOR INSERT WITH CHECK (auth.uid() = user_id_1);
CREATE POLICY "Users can update their couple data" ON public.couples FOR UPDATE USING (auth.uid() = user_id_1 OR auth.uid() = user_id_2);

-- Game sessions policies
CREATE POLICY "Users can view their game sessions" ON public.game_sessions FOR SELECT USING (
  EXISTS (SELECT 1 FROM public.couples c WHERE c.id = couple_id AND (c.user_id_1 = auth.uid() OR c.user_id_2 = auth.uid()))
);
CREATE POLICY "Users can update their game sessions" ON public.game_sessions FOR ALL USING (
  EXISTS (SELECT 1 FROM public.couples c WHERE c.id = couple_id AND (c.user_id_1 = auth.uid() OR c.user_id_2 = auth.uid()))
);

-- Trigger to create user profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.users (id, email, full_name, tier)
  VALUES (new.id, new.email, new.raw_user_meta_data->>'full_name', 'spark');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
