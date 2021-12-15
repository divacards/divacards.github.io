import { useRouter } from 'next/router'
import Layout from "../../../components/Layout";
import Image from "next/image";

export const getStaticPaths = async () => {

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}

export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await require(`../../../public/api/items/${params.id}/index.json`)

    // Pass post data to the page via props
    return {
        props: { res },
        // Re-generate the post at most once per second
        // if a request comes in
        revalidate: 1,
    }
}

export default function Items({ res }) {
    return (
        <Layout pageTitle="tokyo.cards">
            <section className="deck-section py-5 h-20">
                <div className="flex flex-row mx-auto w-1/3 text-cinnabar">
                    <div className="border-obsidian-gold border-b-2 w-1/2 m-auto" > </div>
                </div>
                <span className="w-1/3 mx-auto lufddo text-center lg:text-2xl text-diablo-dark-gold place-self-center">
                    {res.name}
                </span>
                <div className="flex flex-row mx-auto w-1/3 text-cinnabar">
                    <div className="border-obsidian-gold border-b-2 w-1/2 m-auto" > </div>
                </div>
            </section>
            <section className="grid grid-cols-3 gap-4">
                <div className="text-cinnabar text-center m-5">
                    <Image
                        height={500}
                        width={250}
                        loader={({ src }) => src}
                        unoptimized
                        src={res.image}
                        alt="Main image"
                        className="auto-image"
                    />
                </div>
                <div className="text-cinnabar col-span-2 m-5">
                    {res.name}
                    {res.attributes.map((attr, index) => (
                        <div key={index}>{attr.trait_type}: {attr.value}</div>
                    ))}
                </div>

            </section>
        </Layout>
    );
}