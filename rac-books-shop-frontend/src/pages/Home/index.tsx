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
import Loader from '../../components/Loader'
import GridError from '../../components/GridError'
import { getBooksByBestSellers, getBooksByRelease } from '../../api/axios/hooks'

const Home = () => {

    const [search, setSearch] = useState("")

    /*useEffect(() => {
        console.log("use effect get best sellers")
        http.get<IBook[]>("/public/books")
            .then(res => setBestSellers(res.data))
            .catch(error => console.log("Get best sellers error: " + error))
    }, [])*/

    const params = useParams()
    const { data: booksReleases, isLoading: isLoadingReleases, error: errorReleases } = useQuery(["booksByRelease", params.release], () => getBooksByRelease())
    const { data: booksBestSellers, isLoading: isLoadingBestSellers, error: errorBestSelles } = useQuery(["booksByBestSeller", params.bestseller], () => getBooksByBestSellers())

    if (isLoadingReleases || isLoadingBestSellers) {
        return (<>
            <Loader />
        </>)
    }

    if (errorReleases || errorBestSelles) {
        return <GridError message="Error" subMessage="Maintenance application. Try again later" />
    }

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