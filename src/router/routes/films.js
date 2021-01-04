import Films from '@/views/Films/Index.vue'
import NowPlaying from '@/views/Films/NowPlaying.vue'
import ComingSoon from '@/views/Films/ComingSoon.vue'
import Detail from '@/views/Films/Detail.vue'
var films = [
    { path: "/", redirect: "/films" },
    { path: "/films", redirect: "/films/nowPlaying" },
    {
    path: "/films",
    component: Films,
    children: [
        { path: "nowPlaying", component: NowPlaying },
        { path: "comingSoon", component: ComingSoon }
    ]
    },
    {
        path: "/film/:filmId",
        component: Detail,
    },
]
export default films