import Surprise from "../util/confetti";
import Link from 'next/link';
import Image from "next/image";

export default function page() {
    return (
        <div>
            <div className="homepage-link">
                <Link href='/'> ← Назад</Link>
            </div>
            <div>
                <section className="success">
                    <Surprise />
                    <Image src="/zaniki.jpg" alt="wo animals holding hearts and smiling gif" width={570} height={300} className="yay-img" priority />
                    <p id="yay">💖 Улааааа!! 💖</p>
                </section>
            </div>
        </div>
    )
}