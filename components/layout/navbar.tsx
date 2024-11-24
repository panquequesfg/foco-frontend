"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export function Navbar() {
  return (
    <>
      <NavigationMenu className="hidden sm:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Conócenos</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-fit text-sm flex flex-col">
                <li className="p-4 hover:bg-gray-50">
                  <Link href="/about-us" legacyBehavior passHref>
                    <NavigationMenuLink className="whitespace-nowrap">¿Quiénes somos?</NavigationMenuLink>
                  </Link>
                </li>
                <li className="p-4 hover:bg-gray-50">
                  <Link href="/why-foco" legacyBehavior passHref>
                    <NavigationMenuLink className="whitespace-nowrap">¿Por qué Foco?</NavigationMenuLink>
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/sessions/new" legacyBehavior passHref>
              <NavigationMenuLink className="bg-foco-100 hover:bg-foco-200 text-foco-700 rounded-md text-center items-center px-4 py-2 text-sm font-medium">
                Nueva sesión
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Drawer>
        <DrawerTrigger asChild className="block sm:hidden">
          <Button variant="link" className="!p-0 h-7"><Menu className="w-7 h-7"/></Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>
                Menú
              </DrawerTitle>
            </DrawerHeader>
            <div className="flex flex-col gap-y-2 w-full justify-center text-sm py-7 px-2">
              <Link href="/about-us" legacyBehavior passHref>
                <p className="w-full text-center px-4 py-2">¿Quiénes somos?</p>
              </Link>
              <Link href="/why-foco" legacyBehavior passHref className="w-full text-center px-4 py-2">
                <p className="w-full text-center px-4 py-2">¿Por qué Foco?</p>
              </Link>
              <Link href="/sessions/new" legacyBehavior passHref>
                <p className="bg-foco-100 hover:bg-foco-200 text-foco-700 rounded-md font-semibold text-center items-center px-4 py-2">Nueva sesión</p>
              </Link>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
