import React from 'react';
import { Carousel, Typography, Button } from "@material-tailwind/react";


const Banner = () => {
    return (
        <div className='my-8 rounded-lg'>
            <Carousel className="rounded-xl">
                
                
                <div className="relative">
                    <img
                        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                        alt="image 3"
                        className="w-full rounded-lg h-[600px]"
                    />
                    <div className="absolute rounded-lg inset-0 grid h-full w-full items-end bg-black/40">
                        <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                Embrace Love's Journey: Your Perfect Match Awaits
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                                Embrace Love's Journey: Your Perfect Match Awaits invites users to embark on the exciting adventure of finding their life partner. The title emphasizes the idea of embracing the process of discovering love, suggesting that within the platform, users will find someone who perfectly complements their journey, creating a fulfilling and lasting connection.
                            </Typography>
                            <div className="flex gap-2">
                                <Button className='btn bg-[#f51818]'>
                                    Explore
                                </Button>
                                <Button className='btn bg-[#a418f5]'>
                                    Gallery
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;