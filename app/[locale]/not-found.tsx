"use client";

import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, HomeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4 font-inter">
            <div className="max-w-md w-full text-center space-y-8">
                <div className="space-y-2">
                    <Link href="/" className="inline-block" aria-label="Appstract Labs Home">
                        <h1 className="text-4xl font-bold text-foreground font-poppins">Appstract <span className="bg-gradient-to-r from-primary to-violet-500 text-transparent bg-clip-text">Labs</span></h1>
                    </Link>
                    <p className="text-md text-muted-foreground">Building modern software without shortcuts</p>
                </div>

                <div className="space-y-6">
                    <div className="space-y-2">
                        <h2 className="text-6xl font-bold text-primary font-poppins">404</h2>
                        <h3 className="text-2xl font-semibold text-foreground font-poppins">Page Not Found</h3>
                        <p className="text-muted-foreground text-balance">
                        The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button asChild className="w-full sm:w-auto">
                            <Link href="/" aria-label="Go Home" className="flex items-center gap-2">
                                <HomeIcon className="size-4" />
                                Go Home
                            </Link>
                        </Button>
                        <Button variant="outline" asChild className="w-full sm:w-auto bg-transparent">
                            <Link href={{ pathname: "/", hash: "services" }} aria-label="View Services" className="flex items-center gap-2">
                                <MagnifyingGlassIcon className="size-4" />
                                View Services
                            </Link>
                        </Button>
                    </div>

                    <div className="pt-4">
                        <Link
                            href={"/"}
                            aria-label="Go Back"
                            className="text-muted-foreground hover:text-foreground flex items-center justify-center"
                        >
                        <ArrowLeftIcon className="size-4 mr-2" />
                            Go Back
                        </Link>
                    </div>
                </div>

                <div className="pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4">Need help? Contact us:</p>
                    <div className="text-sm">
                        <a
                            href="mailto:info@appstractlabs.com"
                            aria-label="Send email to info@appstractlabs.com"
                            className="text-muted-foreground hover:text-foreground transition-colors block"
                        >
                            info@appstractlabs.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
