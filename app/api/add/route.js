import clientPromise from "@/lib/mongodb"

export async function POST(request) {
    try {
        const body = await request.json();

        // creating Mongodb client and create db , collections 
        const client = await clientPromise;
        const db = client.db('biTree');
        const collection = db.collection('links');

        // if the handle is already claimed then, you cannot create youur bittree 
        const doc = collection.findOne({ handle: body.handle })

        if (doc) {
            return Response.json({ success: false, message: "This BiTree is already exists! Try Choosing different handle" });
        }

        // Adding the data to the collection 
        const res = await collection.insertOne(body);

        return Response.json({ success: true, message: "Your BiTree has been generated", result: res });
    } catch (error) {
        console.error('Error adding link:', error);
        return Response.json({ success: false, message: "Faild to create your BiTree", error: error.message });
    }
}