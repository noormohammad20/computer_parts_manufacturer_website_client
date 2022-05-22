import React from 'react'

const BusinessSummary = () => {
    return (
        <>
            <h2 className='text-5xl text-accent text-center font-bold my-10'>Summary</h2>
            <div class="stats shadow h-50% w-full my-5 ">

                <div class="stat ">
                    <div class="stat-figure text-primary my-18">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                        </svg>
                    </div>
                    <div class="stat-title">Countries</div>
                    <div class="stat-value">31</div>
                    <div class="stat-desc">Jan 1st - may 1st</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </div>
                    <div class="stat-title">New Users</div>
                    <div class="stat-value">420+</div>
                    <div class="stat-desc">↗︎ 400(22%)</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-primary ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div class="stat-title">Total Earn</div>
                    <div class="stat-value">$ 1,200,00+</div>
                    <div class="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </>
    )
}

export default BusinessSummary