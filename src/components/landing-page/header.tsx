'use client';
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link  from "next/link";
import Logo from '../../../public/cypresslogo.svg';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";



const routes = [
    {title:'Features',href:'#features'},
    {title:'Resources',href:'#Resources'},
    {title:'Pricing',href:'#Pricing'},
    {title:'Testimonials',href:'#Testimonial'},

]

const components: {title:string , href:string, description:string}[] = [
    {
    title: 'Alert Dialog',
    href: '#',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '#',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '#',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '#',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '#',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '#',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
];

const Header =() => {

    const [path,setPath] = useState('#products');
    return(
        <header className="p-4
        flex
        justify-center
        items-center
        ">
            <Link href={'/'}
            className="w-full
            justify-left
            items-center
            flex
            gap-2
            "
            >
            <Image 
            src={Logo}
            alt="Cypress Logo"
            width={25}
            height={25}
            />
            <span className="font-semibold
            dark:text-white"
            >
                Cypress.
            </span>
            </Link>
            <NavigationMenu className="hidden 
            md:block">
                <NavigationMenuList className="gap-6" >
                    <NavigationMenuItem>
                        <NavigationMenuTrigger onClick={() =>('#resources')}
                        className={cn({
                            'dark:text-wite':path=== '#resources',
                            'dark:text-white/40':path !== '#resources',
                            'font-normal':true,
                            'text-xl':true,
                        })}>
                            Resources
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid
                            gap-3
                            p-6
                            md:w-[400px]
                            ld:w-[500px]
                            lg:grid-cols-[.75fr_1fr]"
                            >
                                <li className="row-span-3">
                                    <span className="flex
                                    h-full
                                    w-full
                                    select-none
                                    flex-col
                                    justify-end
                                    rounded-md
                                    bg-gradient-to-b
                                    from-muted/50
                                    to-muted
                                    p-6 no-underline
                                    outline-none
                                    focus:shadow-md">
                                    welcome
                                    </span>
                                </li>
                                <ListItem href="#"
                                title="Introduction">
                                    Re-usable components built using Radix UI and Tailwind CSS.
                                </ListItem>
                                <ListItem href="#"
                                title="Installation">
                                    How to install dependencies and structure your app.
                                </ListItem>
                                <ListItem href="#"
                                title="Typography">
                                    Styles for heading, paragraphs, lists...etc
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger 
                        onClick={()=> setPath("#pricing")}
                        className={cn({
                            'dark:text-wite':path=== '#pricing',
                            'dark:text-white/40':path !== '#pricing',
                            'font-normal':true,
                            'text-xl':true,
                        })}>
                            Pricing
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid
                            w-[400px]
                            gap-3
                            p-4
                            md:grid-fow-2">
                                <ListItem 
                                    title="Pro Plan" 
                                    href={'#'}
                                >
                                    Unlock full power with collaboration.
                                </ListItem>
                                <ListItem
                                    title={'free Plan'}
                                    href={'#'}
                                >
                                    Great for teams just starting out.
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                    <NavigationMenuContent>
                        <ul className="grid
                        w-[400px]
                        p-4
                        md:w-[500px]
                        md:grid-cols-2
                        lg:w-[600px]"
                        >
                            {components.map((component)=>(
                            <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                            >
                                {component.description}
                            </ListItem>
                        ))}
                        </ul>
                    </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                            <NavigationMenuLink 
                            className={cn(navigationMenuTriggerStyle(),{
                                'dark:text-white':path === '#testimonial',
                                'dark:text-white/40':path !== '#testimonial',
                                'font-normal':true,
                                'text-xl':true,
                            })}>
                                Testimonial
                            </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>

            </NavigationMenu>
            <aside className="flex
            w-full
            gap-2
            justify-end
            ">
                <Link href={'/login'}>
                    <Button variant='btn-secondary'
                    className='p-1
                    hidden
                    sm:block'>
                        Login
                    </Button>
                </Link>
                <Link href="/signup">
                    <Button variant='btn-primary'
                    className="whitespace-nowrap">
                        Signup
                    </Button>
                </Link>

            </aside>

        </header>
    )

};

export default Header;


const ListItem = React.forwardRef<
React.ElementRef<'a'>,
React.ComponentPropsWithoutRef<'a'>
>(({className,title,children, ...props},ref)=>{
    return <li>
        <NavigationMenuLink asChild>
            <a ref={ref}
            className={cn(
                'group block select-none space-y-1 font-medium leading-none'

            )}
            {...props}
            
            >
                <div className="text-white text-sm font-mediyum leading-none">
                    {title}
                </div>
                <p className="group-hover:text-white/70
                line-clamp-2
                text-sm
                leading-snug
                text-whitie/40"
                >
                    {children}
                </p>
            </a>
        </NavigationMenuLink>
    </li>;
});

ListItem.displayName = 'ListItem';