import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './update.css'
import Navbar from "./Navbar";

const Update = () => {
    const { id } = useParams()
    const [name, setName] = useState("")
    const [price, setPrice] = useState()
    const [img, setImg] = useState("")
    const [type, setType] = useState("makanan")
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:3030/post/${id}`)
            .then((res) => res.json())
            .then(post => {
                setName(post.name)
                setPrice(post.price)
                setImg(post.img)
                setType(post.type)
            })
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault()

        const menu = { name, type, price, img }

        fetch(`http://localhost:3030/post/${id}`, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(menu)
        }).then(response => {
            if (!response.ok) {
                throw new Error('gagal')
            }
            navigate("/home")
        }).catch(error => {
            console.error('error', error);
        })
    }

    return (
        <>
            <Navbar />
            <div className="update">
                <h2>Update Menu</h2>
                <form onSubmit={handleSubmit} className="form-update">
                    <label className="position">Nama Menu</label>
                    <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="position"
                    />

                    <label className="position">Harga Menu</label>
                    <input
                        type="number"
                        required value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="position"
                    />

                    <label className="position">Gambar Menu</label>
                    <input
                        type='link'
                        required
                        value={img}
                        onChange={(e) => setImg(e.target.value)}
                        className="position"
                    />

                    <label className="position">Jenis Menu</label>
                    <select
                        className="position"
                        value={type}
                        onChange={(e) => setType(e.target.value)}>
                        <option value="makanan">Makanan</option>
                        <option value="minuman">Minuman</option>
                    </select>
                    <button >Update</button>
                </form>
            </div>
        </>
    );
}

export default Update;