import './Home.css'

import Banner from "../../components/Banner"
import GridBooks from "../../components/GridBooks"
import GridTitle from "../../components/GridTitle"
import Newsletter from "../../components/Newsletter"
import GridTags from "../../components/GridTags"
import { AbCampoTexto } from "ds-alurabooks"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getBooksByBestSellers, getBooksByRelease } from "../../http"

const Home = () => {

    const [search, setSearch] = useState("")

    /*useEffect(() => {
        console.log("use effect get best sellers")
        http.get<IBook[]>("/public/books")
            .then(res => setBestSellers(res.data))
            .catch(error => console.log("Get best sellers error: " + error))
    }, [])*/

    const params = useParams()
    const { data: booksReleases, isLoading } = useQuery(["booksByRelease", params.release], () => getBooksByRelease())
    const { data: booksBestSellers } = useQuery(["booksByBestSeller", params.bestseller], () => getBooksByBestSellers())

    return (
        <section className="home">

            <Banner
                title="The most complete IT books"
                subtitle="Give a up in your carrear with the best IT books" >
                <form className="search">
                    <AbCampoTexto
                        placeholder="What will your next read be?"
                        value={search}
                        onChange={setSearch}
                        darkmode={true}
                        placeholderAlign="center"
                    />
                </form>
            </Banner>

            <GridTitle text="Releases" />
            <GridBooks books={booksReleases ?? []} />

            <GridTitle text="Best Seller" />
            <GridBooks books={booksBestSellers ?? []} />

            <GridTags></GridTags>

            <Newsletter />

        </section>)
}

export default Home