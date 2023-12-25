"use client"
import Button2 from '@/components/Button2'
import Image from 'next/image'
import React, { useState } from 'react'
import { AiOutlineCaretDown, AiFillCaretDown } from 'react-icons/ai'

const Offers = [
    {
        item: "Fitted Kitchen with accessories"
    },
    {
        item: "Secure Estate"
    },
    {
        item: "Modern Day POP Ceiling"
    },
    {
        item: "Green Area"
    },
    {
        item: "Detailed finishing"
    },
    {
        item: "Pendant lighting & Chandeliers"
    },
    {
        item: "Wardrobes"
    },
    {
        item: "TV Console"
    },
    {
        item: "Water heater"
    },
    {
        item: "Swimming pool"
    },
    {
        item: "Heat extractor"
    },
    {
        item: "CCtv Camera"
    },
    {
        item: "Close proximity to road"
    },
    {
        item: "Internet access"
    }
]

const RoommatePage:React.FC = () => {

    const [formDrop, setFormDrop] = useState<boolean>(false);

    const showFormDrop = () => {
        setFormDrop(true);
    }
  return (
    <div className="agent_upload_container px-14 max-sm:px-6 w-full">
        <div className="agent_upload_header">
            <div className="upload_header_upper flex gap-2">
                <Image src="/description_symbol.png" alt='image' width={20} height={20}/>
                <h2 className="text-xl">Add Description</h2>
            </div>

            <div className="upload_header_lower flex gap-3 mt-1">
                <div className='flex gap-2'>
                    <Image src="/real_estate.png" alt="owner" width={15} height={15} />
                    <small>@owner</small>
                </div>

                <div className='flex gap-2'>
                    <Image src="/location_.png" alt="location" width={15} height={15} />
                    <small>Add location</small>
                </div>
            </div>
        </div>
        
        <form className='mt-5'>
            <div className="upload_images_container flex gap-4 h-[20rem]">
                <div className="upload_image_left w-1/2 flex items-center justify-center">
                    <label htmlFor="file" className='upload_image'>
                        <input type='file' id="file" className='hidden'/>
                        <Image src="/camera.png" alt='' width={40} height={40}/>
                    </label>
                </div>

                <div className='upload_image_right grid lg:grid-cols-2 w-1/2 gap-3'>
                    <label htmlFor="file" className='upload_image flex justify-center
                    items-center'>
                        <input type='file' id="file" className='hidden'/>
                        <Image src="/camera.png" alt='' width={40} height={40}/>
                    </label>

                    <label htmlFor="file" className='upload_image flex justify-center
                    items-center'>
                        <input type='file' id="file" className='hidden'/>
                        <Image src="/camera.png" alt='' width={40} height={40}/>
                    </label>

                    <label htmlFor="file" className='upload_image flex justify-center
                    items-center'>
                        <input type='file' id="file" className='hidden'/>
                        <Image src="/camera.png" alt='' width={40} height={40}/>
                    </label>

                    <label htmlFor="file" className='upload_image flex justify-center
                    items-center'>
                        <input type='file' id="file" className='hidden'/>
                        <Image src="/camera.png" alt='' width={40} height={40}/>
                    </label>
                </div>
            </div>

            <div className='property_section lg:flex-row flex gap-3 mt-8 w-full md:flex-col
            max-sm:flex-col'>
                    <div className='property_section_left w-[70%] max-sm:w-full'>
                        <div className="property_section_header flex gap-2">
                            <Image src="/description_symbol.png" alt='property' width={20} height={20} />
                            <h2 className="text-xl font-medium">Property Category</h2>
                        </div>

                        <div className='more_property_description grid max-sm:flex-col 
                            max-sm:w-full gap-4 my-4 max-sm:grid-cols-2 md:grid-cols-2'>
                            <div className='toilet_number flex gap-2 border-[1px] border-sky-500 p-3
                            items-center'>
                                <Image src="/toilet.png" alt='toilet' width={20} height={20} />
                                <h3>No of toiliet</h3>
                            </div>

                            <div className='bedroom_number flex gap-2 border-[1px] border-sky-500 p-3
                            items-center'>
                                <Image src="/bedroom_icon.png" alt='bedroom' width={20} height={20} />
                                <h3>No of bedrooms</h3>
                            </div>

                            <div className='amenities flex gap-2 border-[1px] border-sky-500 p-3
                            items-center cursor-pointer'>
                                <Image src="/amenities.png" alt='amenities' width={20} height={20} />
                                <h3>Total amenities</h3>
                            </div>
                        </div>

                        <hr />

                        <div className="select_extras my-3 w-[28%] md:w-[50%] max-sm:w-[70%]">
                            <h3 className='font-medium text-xl mb-3'>Select Extras</h3>

                            <div className="conducive_environment flex gap-3 my-4 border-[0.5px]
                            w-[88%] py-1 px-2">
                                <Image src="/environment.png" alt='environment' width={20} height={20} />
                                <p className='text-sm'>Conducive Environment </p>
                            </div>

                            <div className="market_closeness flex gap-3 my-4 border-[0.5px]
                            w-[89%] py-1 px-2">
                                <Image src="/central_market.png" alt='market proximity' width={20} height={20} />
                                <p className='text-sm'>Close to central market</p>
                            </div>

                            <div className='adequate_security flex gap-3 my-4 border-[0.5px]
                            w-[74%] py-1 px-2'>
                                <Image src="/security.png" alt="security" width={20} height={20} />
                                <p className='text-sm'>Adequate Security</p>
                            </div>

                            <div className="quiet_surrounding flex gap-3 my-4 border-[0.5px]
                            w-[75%] py-1 px-2">
                                <Image src="/surrounding.png" alt='surrounding' width={20} height={20} />
                                <p className='text-sm'>Quiet Surrounding</p>
                            </div>

                            <div className='w-[50%] mb-4 cursor-pointer'><Button2 text="Add More Extra" /></div>
                        </div>

                        <hr />

                        <div className="tell_us my-4">
                            <h1 className='text-bold'>Tell us about this place</h1>
                            <input type="textarea" 
                            placeholder='Write some short description about this place, like a little history 
                            and storytelling for people to admire the place just as you do.' 
                            className='outline-none mt-2 w-full h-[2rem] text-xs'/>
                        </div>

                        <hr />

                        <div className='what_theplace_offers mt-4'>
                            <h2 className='text-bold mb-3'>What this place offers</h2>

                            <div className='grid lg:grid-cols-2 gap-1 mb-6 md:grid-cols-2'>
                                {
                                    Offers.map((offer, index) => (
                                    <div  key={index} className='flex gap-2 w-[50%]
                                    md:w-[90%] max-sm:w-[70%] m-1 p-1 border-[1px] items-center'>
                                        <Image src="/house_offers.png" alt='offers' width={15} height={15} />
                                        <p className='text-xs'>{offer.item}</p>
                                    </div>
                                    ))
                                }
                            </div>
                            <div className='w-[20%] 
                            md:w-[35%] max-sm:w-[60%] mb-6'><Button2 text="Add more amenities" /></div>
                        </div>
                    </div>

                    <div className='property_section_right w-[22%] mx-3 bg-white rounded-2xl p-6
                    h-[35%] md:w-[55%] max-sm:w-full max-sm:m-auto py-12'>
                        <div className='property_section_header flex justify-between items-center mb-6'>
                            <h2 className='text-gray-500 text-xl font-medium'>Add Amount</h2>
                            <div className='duration_dropdown flex px-2 py-1 border-[1px] border-gray-950
                            rounded-full gap-2'>
                                <p>duration</p>
                                <Image src="/caret_arrow.png" alt='duration' width={10} height={10} />
                            </div>
                        </div>

                        <p className='text-center my-3 text-sm'><i>How much is this property?</i></p>

                        <div className='hospitality_fee my-3'>
                            <div className="hospitality_upper flex justify-between">
                                <h3 className='text-gray-500 font-medium'>Hospitality Fee</h3>
                                <h3 className='text-gray-400'>None</h3>
                            </div>

                            <div className='agency_fee_lower'>
                                <p>None</p>
                                <input type="range" className='w-full'/>
                            </div>
                        </div>

                        <div className='insurance_fees mt-3'>
                            <div className="insurance_fees_upper flex justify-between">
                                <h3 className='text-gray-500 font-medium'>Insurance fee</h3>
                                <h4 className='text-gray-400'>$1.2</h4>
                            </div>

                            <input type="text"
                            className='outline-none w-full'
                            required />
                        </div>

                        <hr />

                        <div className="total_amount flex justify-between">
                            <p>Total amount:</p>
                            <p className='text-gray-300 font-semibold'>N485,000-N500,000</p>
                        </div>
                    </div>
            </div>

            <div className='flex justify-center' onClick={showFormDrop}>
                <div className='upload_button my-6 
                py-2 rounded-full px-12 w-1/3 text-white mb-8 max-sm:w-[60%] 
                max-sm:px-6 text-center cursor-pointer md:w-2/3'>
                    <p>Proceed to Upload</p>
                </div>
            </div>

            {formDrop ? (
            <div className='roommate_dropdown_container absolute lg:w-[97.5vw] z-10 p-8
            pb-14 md:w-[99vw] max-sm:w-full max-sm:p-3'>
                <div className='roommate_dropdown_form bg-white w-[40%] m-auto px-6
                py-8 md:w-[70%] max-sm:w-[98%] max-sm:px-2'>
                    <form className='m-auto p-3'>
                        <h2 className='font-bold text-xl'>What Would You Have?</h2>

                        <div className='other_description_container mt-3 p-3'>
                            <div className='house_rules'>
                                <h2 className='font-medium text-xl'>House rules
                                    <span className='text-xs font-normal'>
                                        <i>
                                            (These will be expected of potential roommates)
                                        </i>
                                    </span></h2>
                                <div className='flex gap-1 mt-3 items-center'>
                                    <Image src="/description_symbol.png" alt='image' width={20} height={20}/>
                                    <input type="text"
                                    className='w-full bg-transparent outline-none border-b-[1px] border-gray-900'
                                    required />
                                </div>

                                <div className='add_more_roommate_dropdown flex justify-end'>
                                    <p className='border-[1px] border-gray-900 px-3
                                    rounded-full p-1 mt-4 text-xs'>add more</p>
                                </div>

                                <input type="text"
                                className='w-full bg-transparent outline-none border-b-[1px] border-gray-900'
                                required />
                            </div>

                            <div className='considerations mt-3'>
                                <h2 className='text-xl font-medium'>House rules 
                                    <span className='text-xs font-normal'>
                                        <i>
                                        (These will be expected of potential roommates)
                                        </i>
                                    </span></h2>
                                <div className='flex gap-2 mt-3'>
                                    <Image src="/description_symbol.png" alt='image' width={20} height={20}/>
                                    <input type="text"
                                    className='w-full bg-transparent outline-none border-b-[1px] border-gray-900'
                                    required />
                                </div>

                                <div className='add_more_roommate_dropdown flex justify-end'>
                                    <p className='border-[1px] border-gray-900 px-3
                                    rounded-full p-1 mt-4 text-xs'>add more</p>
                                </div>

                                <input type="text"
                                className='w-full bg-transparent outline-none border-b-[1px] border-gray-900'
                                required />
                            </div>

                            <div className='add_experiences_roommate_dropdown flex gap-3 mt-4 max-sm:flex-col'>
                                <div className='experience_roommate_left w-[55%] max-sm:w-full'>
                                    <h2 className='font-medium text-xl'>Add Experiences:</h2>
                                    <div className='experience_input_image h-[20rem]
                                    flex items-center justify-center mt-4 mb-9'>
                                        <Image src="/camera.png" alt='' width={40} height={40}/>
                                    </div>
                                </div>

                                <div className='experience_roommate_right w-[45%] max-sm:w-full'>
                                    <Image src="/description_symbol.png" alt='image' width={20} height={20}/>
                                    <input type="text"
                                    className='w-full bg-transparent outline-none border-b-[1px] border-gray-900'
                                    required />

                                    <input type="text"
                                    className='w-full bg-transparent outline-none border-b-[1px] border-gray-900'
                                    required />

                                    <input type="text"
                                    className='w-full bg-transparent outline-none border-b-[1px] border-gray-900'
                                    required />

                                    <div className='rounded-full my-4 cursor-pointer flex justify-end'>
                                        <p className='border-[1px] border-gray-900 px-3
                                    rounded-full p-1 mt-4 text-xs'>upload</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center mt-5'>
                            <button type='submit' className='mt-4 mx-auto upload_button
                            px-4 w-3/4 text-white rounded-full py-1'>
                                Proceed to Upload
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            ) : null }
        </form>
    </div>
  )
}

export default RoommatePage