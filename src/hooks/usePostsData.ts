import { useEffect, useRef, useState } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { RootState, getPosts } from "../store/store";

export interface IPostData {
    id: string;
    author?: string;
    title?: string;
    rating?: number;
    avatar?: string;
    previewImg?: string;
    datePostUtc?: number;
}

export const usePostsData = () => {
    const dispatch = useDispatch()
    const bottomOfList = useRef<HTMLDivElement>(null)

    const token = useSelector<RootState>(state => state.getToken.token);
    const [post, setPost] = useState<Array<IPostData>>([])
    const [loading, setLoading] = useState(false);
    const [errorLoading, setErrorLoading] = useState('')
    const [nextAfter, setNextAfter] = useState('')
    const [buttonLoading, setButtonLoading] = useState(false)

    const hendlerLoader = () => {
        load();
        setButtonLoading(false)
    };

    const load = async () => {
        if (!token) return;

        setLoading(true);
        setErrorLoading('');
        try {
            const resp = await axios.get('https://oauth.reddit.com/best.json?sr_detail=true&raw_json=1', {
                headers: { Authorization: `Bearer ${token}` },
                params: {
                    limit: 10,
                    after: nextAfter
                }
            });

            const after = resp.data.data.after;

            const userData = resp.data.data.children.map(
                (item: { data: any }) => ({
                    id: item.data.id,
                    author: item.data.author,
                    title: item.data.title,
                    rating: item.data.ups,
                    avatar: item.data.sr_detail.icon_img ?
                        item.data.sr_detail.icon_img :
                        'https://img.goodfon.ru/original/1024x768/1/8b/frank-riberi-franck-ribery-3176.jpg',
                    previewImg: item.data.preview ?
                        item.data.preview.images?.[0].source.url.replace(
                            /(\$amp\;)/g,
                            'g'
                        ) :
                        'https://img.goodfon.ru/original/1024x768/1/8b/frank-riberi-franck-ribery-3176.jpg',
                    datePostUtc: item.data.created_utc,
                })
            );

            setNextAfter(after);
            setPost(prevUserData => {
                const uniquePosts = userData.filter((newPost: IPostData) =>
                    !prevUserData.some((existingPost: IPostData) => existingPost.id === newPost.id)
                );

                return prevUserData.concat(...uniquePosts);

            });
            dispatch(getPosts(post))

        } catch (error) {
            setErrorLoading(String(error));
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                if (post.length > 0 && post.length % 30 === 0) {
                    setButtonLoading(true)
                    return
                }
                load();
            }
        }, {
            rootMargin: '5px'
        });

        if (bottomOfList.current) {
            observer.observe(bottomOfList.current)
        }

        return () => {
            if (bottomOfList.current) {
                observer.unobserve(bottomOfList.current)
            }
        }
    }, [token, bottomOfList.current, nextAfter])

    return {
        post,
        loading,
        errorLoading,
        bottomOfList,
        buttonLoading,
        hendlerLoader
    }
}

