"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface edibles {
  name: string;
  type: string;
  imgUrl: string;
}

export const HomeEdibles = ({ edibles }: { edibles: edibles[] }) => {
    const [active, setActive] = useState(3);
    const itemsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        loadShow();
    }, [active]);

    const loadShow = () => {
        if (itemsRef.current) {
            const items = itemsRef.current.querySelectorAll<HTMLElement>(".item-edibles");
            if(!items.length)return;
        let stt = 0;

        items[active].style.transform = "none";
        items[active].style.zIndex = "1";
        items[active].style.filter = "none";
        items[active].style.opacity = "1";

        for (let i = active + 1; i < items.length; i++) {
            stt++;
            items[i].style.transform = `translateX(${120 * stt}px) scale(${
            1 - 0.2 * stt
            }) perspective(16px) rotateY(-1deg)`;
            items[i].style.zIndex = `${-stt}`;
            items[i].style.filter = "blur(5px)";
            items[i].style.opacity = stt > 2 ? "0" : "0.6";
        }

        stt = 0;

        for (let i = active - 1; i >= 0; i--) {
            stt++;
            items[i].style.transform = `translateX(${-120 * stt}px) scale(${
            1 - 0.2 * stt
            }) perspective(16px) rotateY(-1deg)`;
            items[i].style.zIndex = `${-stt}`;
            items[i].style.filter = "blur(5px)";
            items[i].style.opacity = stt > 2 ? "0" : "0.6";
        }
        }
    };

    const nextOnClick = () => {
        if (active + 1 < edibles.length) {
        setActive(active + 1);
        }
    };

    const prevOnClick = () => {
        if (active - 1 >= 0) {
        setActive(active - 1);
        }
    };

    return (
        <div>
            <h1 className="image-slider-h">Popular Edibles Products</h1>
            <span className="content-container-edibles">
                <div className="slider-edibles" ref={itemsRef}>
                    {edibles.map((edibles) => (
                        <div className="item-edibles" key={edibles.name}>
                        <Link href={`/products/edibles/${edibles.name}`}>
                            <Image
                            src={edibles.imgUrl}
                            alt={edibles.name}
                            height={400}
                            width={400}
                            />
                            <p>{edibles.type}</p>
                            <h3>{edibles.name}</h3>
                        </Link>
                        </div>
                    ))}
                    <button id="next-edibles" onClick={nextOnClick}>
                        <Image src="/icons/arrow_forward.svg" alt="" height={40} width={40} />
                    </button>
                    <button id="prev-edibles" onClick={prevOnClick}>
                        <Image src="/icons/arrow_back.svg" alt="" height={40} width={40} />
                    </button>
                </div>
            </span>
        </div>
    );
};

export default HomeEdibles;