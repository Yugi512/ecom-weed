import React from 'react';

import Image from 'next/image';
import { Card, CardContent } from "../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const HomeFlower = () => {
    return (
        <div>
            <Carousel className="w-full max-w-xs">
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square flex-col justify-center p-25">
                                        <Image src={'/icons/weed.png'} alt={''}  width={100} height={100}/>
                                        <span className="text-4xl font-semibold">flower</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                            ))}
                        </CarouselContent>
                    <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default HomeFlower;