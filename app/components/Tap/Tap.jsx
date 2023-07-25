'use client'
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { AiFillFacebook } from 'react-icons/ai'
import { FaFacebookMessenger } from 'react-icons/fa'
import { SiShopee } from 'react-icons/si'
import DropDown5 from '../MenuDropDown/DropDown5'



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Tap = () => {

    let [categories] = useState({
        Recent: [
            {
                id: 1,
                title: <DropDown5 />,
                date: '5h ago',
                commentCount: 5,
                shareCount: 2,
            },
            {
                id: 2,
                title: "So you've bought coffee... now what?",
                date: '2h ago',
                commentCount: 3,
                shareCount: 2,
            },
        ],
        Popular: [
            {
                id: 1,
                title: 'Is tech making coffee better or worse?',
                date: 'Jan 7',
                commentCount: 29,
                shareCount: 16,
            },
            {
                id: 2,
                title: 'The most innovative things happening in coffee',
                date: 'Mar 19',
                commentCount: 24,
                shareCount: 12,
            },
        ],
        Trending: [
            {
                id: 1,
                title: 'The most innovative things',
                date: '2d ago',
                commentCount: 9,
                shareCount: 5,
            },
            {
                id: 2,
                title: "The worst advice we've ever heard about coffee",
                date: '4d ago',
                commentCount: 1,
                shareCount: 2,
            },
        ],
    })

    return (
        <div>
            <div className="w-[200px]">
                <div>

                </div>
                <Tab.Group>
                    <Tab.List className="flex space-x-1 rounded-xl  bg-blue-900/20 p-1">
                        {Object.keys(categories).map((category) => (
                            <Tab
                                key={category}
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                        selected
                                            ? 'bg-white shadow'
                                            : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                    )
                                }
                            >
                                <div className='flex items-center justify-center '>
                                    {category === 'Recent' ? (
                                        <AiFillFacebook size={50} />
                                    ) : category === 'Popular' ? (
                                        <FaFacebookMessenger size={50} />
                                    ) : category === 'Trending' ? (
                                        <SiShopee size={50} />
                                    ) : (
                                        category
                                    )}
                                </div>

                            </Tab>
                        ))}
                    </Tab.List>
                    <div className='flex w-[400px] border-2'>

                        <Tab.Panels className="mt-2">
                            {Object.values(categories).map((posts, idx) => (
                                <Tab.Panel
                                    key={idx}
                                    className={classNames(
                                        'rounded-xl bg-white p-3',
                                        'ring-white  w-[350px] ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                    )}
                                >
                                    <ul>
                                        {posts.map((post) => (

                                            <div key={post.id}>
                                                {post.title}
                                            </div>

                                        ))}
                                    </ul>
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </div>
                </Tab.Group>
            </div>
        </div >
    )
}

export default Tap
