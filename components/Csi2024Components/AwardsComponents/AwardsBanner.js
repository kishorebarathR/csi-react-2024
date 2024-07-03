import React from 'react'

const AwardsBanner = () => {
    return (
        <>
            <div className=''>
                <div className='bg-[url(/images/awards_2024/csi-awards-banner.jpg)] flex-col bg-cover h-[150vh] bg-center w-screen'>
                    <div className='flex flex-col justify-evenly items-center content-center h-full'>
                        <div className='w-full text-center'>
                            <h1 className='font40px text-white'>
                                Innovation for Transformation Awards
                            </h1>
                        </div>
                        <div className='text-center text-white w-7/12'>
                            <p className='font20px pt-96'>
                                The Catalyst Group is delighted to announce the call for nominations for the Innovation for Transformation Awards! These awards shine a spotlight on the incredible individuals and organisations transforming the lives of vulnerable communities across India. We are looking for trailblazers who are driving change with innovative ideas, collaborative efforts, and a community-first mindset. These nominations would be strictly within the purview of the three themes for CSI 2024- namely, Innovative Financing, Implementation- Fidelity & Quality, and Grounded Climate Response.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AwardsBanner
