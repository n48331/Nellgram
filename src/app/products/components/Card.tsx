// @flow 
import * as React from 'react';
import Image from 'next/image';
type Props = {
    imgURL: string;
    title: string;
    desc: string;
};
export const Card = (props: Props) => {
    return (
        <div className="border-2 rounded-2xl border-[#5707FF]">
            <div className="p-6 md:p-8 lg:p-5">
                <Image
                    src={`/image/products/${props.imgURL}`}
                    alt={"banner"}
                    className="rounded-2xl mx-auto"
                    width={350}
                    height={350}
                />
                <div className="my-2 font-semibold text-xl md:text-xl lg:text-2xl">
                    {props.title}
                </div>
                <div className="text-sm md:text-xl lg:text-xl">
                    {props.desc}
                </div>
            </div>
        </div>
    );
};