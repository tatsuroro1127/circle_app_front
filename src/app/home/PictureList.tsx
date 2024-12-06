"use client"
import "./PictureList.css"

import EmblaCarousel from '../components/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import '../components/css/base.css'
import '../components/css/embla.css'

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function PictureList() {
    return (
        <>
            <div className="pic_sliding">
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </div>
        </>
    );
}