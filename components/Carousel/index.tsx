import { CarouselItem } from "../../config";
import * as Components from "../index";
import Image from "next/image";
import styles from "../../styles/components/Carousel.module.scss";
import Link from "next/link";
import { useState } from "react";

export const Carousel = ({items, carouselWidth}: {items: CarouselItem[], carouselWidth: number}) => {
    const [carouselI, setCarouselI] = useState<number>(5);
    const itemCount = Math.max(items.length, 10);
    const itemWidth = Math.min(carouselWidth /3, 600);
    const itemHeight = itemWidth / 3 * 2;
    const carouselHeight = itemHeight + 40;
    const allItems = [];

    const isImage = (val:string) => {
        return /\.(png|jpg|jpeg|svg)$/.test(val);
    }
    
    const changeRow = (val: number) => {
        let newVal = (carouselI + val)%allItems.length;
        if(newVal < 1) newVal = itemCount;
        if(newVal > itemCount) newVal = 1;
        
        setCarouselI(newVal);
    }
    
    for(let i = 0; i < itemCount + 5; i += 1) {
        const item = items[i%items.length];
        const Description = () => (<p>{item.description}</p>);
        
        const newItem =  (
            <div key={`${item.title}_${i}`}>
                <Link href={item.link} passHref>
                    <a>
                        <div 
                            className={styles.carouselInnerItem}
                            style={{
                                width: itemWidth,
                                height: itemHeight,
                            }}
                        >
                                <h2 className={styles.title}>{item.title}</h2>
                                {isImage(item.srcUrl)? (
                                    <Image 
                                        src={item.srcUrl} 
                                        alt={item.title} 
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                ): (
                                    <video autoPlay muted loop>
                                        <source src={item.srcUrl}/>
                                    </video>
                                )}
                                {carouselWidth > 700 && <Description />} 
                        </div>
                    </a>
                </Link>
            </div>
        );
        allItems.push(newItem);
    }
    
    return (
        <div 
            className={styles.carousel}
            style={{
                width: `${carouselWidth / 10}rem`,
                height: `${carouselHeight / 10}rem`

            }}
        >
            <button 
                className={styles.buttonLeft} 
                onClick={() => changeRow(-1)}
               
            >
                &lt;
            </button>
            <div className={styles.carouselInner}>
                <div 
                    className={styles.row}
                    style={{
                        width: `${itemCount * (itemWidth / 10 + 2)}rem`,
                        transform: `translateX(${
                            ((carouselI * (itemWidth / 10 + 2))) * -1
                        }rem)`,
                    }}
                >
                    {allItems}
                </div>
            </div>
            <button 
                className={styles.buttonRight} 
                onClick={() => changeRow(1)}
                
            >
                &gt;
            </button>
        </div>
    );
}