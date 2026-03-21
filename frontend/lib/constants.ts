import { Briefcase, ChartArea, Code, Network, Palette, ShieldCheck, Star } from "lucide-react";

export const appConstants = {
    navlist : [
        {
            label:'home',
            href: '/',
            
        },
        {
            label:'dashboard',
            href: '/dashboard',
            
        },
        {
            label:'profile',
            href: '/profile',
            
        },
        {
            label:'attendance',
            href: '/attendance',
            
        },
        {
            label:'settings',
            href: '/settings'
        }
    ],
    careerpath  : [
        {
            label: "featured",
            icon: Star
        },
        {
            label: "software development",
            icon: Code
        },
        {
            label: "netwoking engineering",
            icon: Network
        },
        {
            label: "Design",
            icon: Palette
        },
        {
            label: "Security",
            icon: ShieldCheck
        },
        {
            label: "Data",
            icon: ChartArea
        },
        {
            label: "Office productivity",
            icon: Briefcase
        },
    ]
}