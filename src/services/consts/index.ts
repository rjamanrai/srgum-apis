
export interface IMenus {
    key: string,
    title: string,
    path: string
}

export const menus: IMenus[] = [
    {
        key: "home",
        title: "Home",
        path: "/"
    },
    {
        key: "blog",
        title: "Blog",
        path: "/blog"
    },
    {
        key: "podcast",
        title: "podcast",
        path: "/podcast"
    }
]