// Dynamic Routing Page to display a spcific claim handles
import Link from "next/link"
import clientPromise from "@/lib/mongodb"

export default async function Page({ params }) {
    const handle = (await params).handle

    const client = await clientPromise;
    const db = client.db('biTree');
    const collection = db.collection('links');

    const doc = await collection.findOne({ handle: handle })

    return <>
        {doc && <div className="flex min-h-screen bg-purple-500 justify-center items-start py-10">
            <div className="photo flex justify-center flex-col items-center">
                <div className="hover:scale-105 transition-transform duration-300">
                    <Link href={doc.imageLink}><img src={doc.imageLink} className="w-40 h-40 rounded-full" alt="user image" /></Link>
                    <span className="font-bold text-xl">@{doc.handle}</span>
                </div>
                <p
                    className="text-center text-sm font-normal max-w-md"
                    style={{ wordWrap: 'break-word' }}
                >
                    {doc.description}
                </p>

                <div className="all-liks my-5 w-[-webkit-fill-available]">
                    {doc.links.map((link, index) => {
                        return <div key={index}>
                            <Link href={link.link}><div className="flex shadow-lg rounded-lg py-4 font-semibold bg-white max-w-xl justify-center items-center my-2 hover:scale-105 transition-transform duration-300">{link.linktext}</div></Link>
                        </div>
                    })}
                </div>
            </div>
        </div>}

        {!doc && <div className="flex min-h-screen bg-purple-500 justify-center py-10 items-center font-extrabold text-5xl">
            <div className="animate-scale-up-down flex flex-col justify-center items-center gap-5 ">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRawnyIx8oRISFEPlNGzi_-9cQib_GTxDBmtg&s"></img>
                <span>BiTree Not Found</span>
            </div>
        </div>}
    </>
}