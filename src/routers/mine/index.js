export default{
    path: '/mine',
    component: () => import('@/views/Mine'),
    // children: [
    //     {
    //         path:'city',
    //         comment: () =>import('@/components/City')
    //     },
    //     {
    //         path:'comingsoon',
    //         comment: () =>import('@/components/ComingSoon')
    //     },
    //     {
    //         path:'nowplaying',
    //         comment: () =>import('@/components/Nowplaying')
    //     },
    //     {
    //         path:'search',
    //         comment: () =>import('@/components/Search')
    //     }
    // ]
}