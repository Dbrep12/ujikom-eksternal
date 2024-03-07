import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './create.css'
import Navbar from "./Navbar";

const Create = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState()
    const [img, setImg] = useState("")
    const [type, setType] = useState("makanan")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const menu = { name, type, price, img }

        fetch("http://localhost:3030/post", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(menu)
        }).then(() => {
            navigate("/home")
        })
    }

    return (
        <>
            <Navbar />
            <div className="create">
                <h2>Tambah Menu Baru</h2>
                <form onSubmit={handleSubmit} className="form-create">
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
                    <button >Create</button>
                </form>
            </div>
        </>
    );
}

export default Create;