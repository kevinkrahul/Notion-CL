"use server"

import { cookies } from "next/headers";
import { FormSchema } from "../types";
import { z } from "zod";
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { NextRequest } from 'next/server';



export async function actionLoginUser({
  email,
  password,
}: z.infer<typeof FormSchema>) {
  const supabase = createRouteHandlerClient({ cookies });
  const response = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return response;
}

export async function actionSignUpUser({
  email,
  password,
}:z.infer<typeof FormSchema>) {
  const supabase = createRouteHandlerClient({cookies});
  const {data} = await supabase
  .from('profiles')
  .select("*")
  .eq('email',email);

  if(data?.length) return {error: {message:'User already exists',data}}
  const response = await supabase.auth.signUp({email,
    password,
    options:{ emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}api/auth/callback`
  },
  
  });
  return response;
}