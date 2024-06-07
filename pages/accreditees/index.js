import api from "@/app/components/axios/api";
import { useEffect, useState, useContext } from "react";
import Layout from "../layout";
import { useSearchParams } from "next/navigation";
import SearchAccreditees from "@/app/components/accreditees/searchAccreditees";
import Search from "@/app/components/accreditees/search";
import Loader from "@/app/components/reuseable/loader";
import { LoaderContext } from "@/app/components/context/loaderContext";
import { useForm } from "react-hook-form";
import { notFound } from 'next/navigation';
import Error from "next/error";

export default function index(){

    //Form validation
    const {register, handleSubmit, formState:{ errors }} = useForm();
    
    const {loading, setLoading} = useContext(LoaderContext);
    //State to control which component is diplayed
    const [submitted, setSubmitted] = useState(false);
    //Error state
    const [error, setError] = useState(false);
    //Data retrieved by api
    const [fetchedData, setFetchedData] = useState([]);
    //State for keyword entered by user
    const [keyword, setKeyword] = useState('');

    //Func to format dates returned by WP api
    const formatDateDMY = (dateString) => {
        const date = dateString;
        const day = date.substring(6, 8);
        const month = date.substring(4, 6);
        const year = date.substring(0, 4);
        const formattedDate = `${day}/${month}/${year}`
        return formattedDate;
    }


    const handleFormSubmit = (data) => {

        setLoading(true);
        const promises = [];
        const resultsPerPage = 40;

         api.get(`/book?per_page=${resultsPerPage}`)
            .then(resp => {

                setLoading(true);
                const retrievedData = []; //Array to hold all results set

                //Make first request and push to results set
                resp.data.map(data => {

                    retrievedData.push({
                        name: data.acf.accreditee_name,
                        active: data.acf.active,
                        county: data.acf.county,
                        date: formatDateDMY(data.acf.date_achieved),
                        registration: data.acf.registration_number
                    })
                })

                //Wordpress api will only return max 100 results per page, the rest will be paginated.
                //If results are paginated loop through and add to result set
                if (resp.headers["x-wp-totalpages"] > 1) {

                    //Number of pages given by the api
                    const totalPages = Number(resp.headers["x-wp-totalpages"]);

                    //for each page number make another request and add to the result set
                    for (let pageNumber = 2; pageNumber <= totalPages; pageNumber++) {
                        promises.push(api.get(`/book?per_page=${resultsPerPage}&page=${pageNumber}`)
                            .then(resp => {
                                //For each request push the page results to the result set
                                resp.data.map(data => {
                                    retrievedData.push({
                                        name: data.acf.accreditee_name,
                                        active: data.acf.active,
                                        county: data.acf.county,
                                        date: formatDateDMY(data.acf.date_achieved),
                                        registration: data.acf.registration_number
                                    })
                                })
                            })
                            .catch(err => {
                                setLoading(false);
                                setError(true);
                            })
                        );
                    }
                }
                
                Promise.all(promises)
                    .then(() => {
                        setFetchedData(retrievedData);
                        setKeyword(data.search);
                        setSubmitted(true);
                        setLoading(false);
                    })
            })

            .catch(err => {
                setLoading(false);
                setError(true);
            });
 
        }


    return(
        <>
            <Layout>

                <Loader/>

                {error ? (
                    <>
                        <Error statusCode={500} />
                    </>
                ) : (
                    <>
                        <main>
                            {submitted ? (
                                <>
                                    <Search
                                        handleFormSubmit={handleFormSubmit}
                                        handleSubmit={handleSubmit}
                                        fetchedData={fetchedData}
                                        keyword={keyword}
                                        setError={setError}
                                        register={register}
                                        errors={errors}
                                    />

                                </>
                            ) : (
                                <>
                                    <SearchAccreditees
                                        handleFormSubmit={handleFormSubmit}
                                        setKeyword={setKeyword}
                                        handleSubmit={handleSubmit}
                                        register={register}
                                        errors={errors}
                                    />
                                </>
                            )}

                        </main>
                    </>
                )}

            </Layout>

        </>
    )
}