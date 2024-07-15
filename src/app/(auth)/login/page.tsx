'use client';
import React ,{useState} from "react";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm ,SubmitHandler} from "react-hook-form";
import { FormSchema } from "@/lib/types";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Logo from '../../../../public/cypresslogo.svg';
import { FormField,FormControl,FormItem,Form,FormMessage,FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input"
import Loader from "@/components/ui/Loader";
import { actionLoginUser } from "@/lib/server-actions/auth-actions";


const LoginPage =() => {
        const router = useRouter();
        const [submitError,setSubmitError]= useState('');
        const form = useForm<z.infer<typeof FormSchema>>({
            mode: 'onChange',
            resolver: zodResolver(FormSchema),
            defaultValues: {email:'',password:''},
        });

const isLoading = form.formState.isSubmitting;

const onSubmit: SubmitHandler<z.infer<typeof FormSchema>> = async(
    formData
)=>{
    const {error} = await actionLoginUser(formData);
    if (error){
    form.reset();
    setSubmitError(error.message);
    }
    router.replace('/dashboard');
};
    return (<Form {...form}>
        <form 
        onChange={()=>{
            if (submitError) setSubmitError('');
        }}
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full 
        sm:justify-center
        sm:w-[400px]
        space-y-6
        flex
        flex-col"
        >
            <Link href="/"
            className="w-full
            flex
            justify-left
            items-center"
            >
                <Image src={Logo} 
                alt="Cypress Logo" 
                width={50} 
                height={50}
                />
                <span className="font-semibold
                drak:text-white 
                text-4xl
                ml-2
                ">
                    cypress.
                </span>
            </Link>
            <FormDescription className="
            text-foregrond/60"
            >
                An all-In-One Collaboration and Productivity Platform
            </FormDescription>
            <FormField 
            disabled={isLoading}
            control={form.control}
            name='email'
            render={({field})=>(
                <FormItem>
                    <FormControl>
                        <Input type="email"
                        placeholder="Email"
                        {...field}/>
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
            />
            <FormField 
            disabled={isLoading}
            control={form.control}
            name='password'
            render={({field})=>(
                <FormItem>
                    <FormControl>
                        <Input type="password"
                        placeholder="Password"
                        {...field}/>
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
            />
            {submitError && <FormMessage>{}</FormMessage>}
            <Button type="submit"
            className="w-full
            p-6"
            size="lg"
            disabled={isLoading}>
                {!isLoading ? 'Login' : <Loader/>}
            </Button>
            <span className="self-center">
            Dont have an account?
            <Link href="/signup"
            className="text-primary">
                Sign up
            </Link>
            </span>
        </form>
        </Form>
    );
};

export default LoginPage;