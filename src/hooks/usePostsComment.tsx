import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const usePostsComment = (postId: string) => {
    const token = useSelector<RootState>((state) => state.getToken.token);

    const [commentsData, setCommentsData] = useState([]);
    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                if (token && token !== 'undefined') {
                    const response = await axios.get(`https://oauth.reddit.com/comments/${postId}?sr_detail=true`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    const getFormattedComments = (children: any) => {
                        const comments = children.map(
                            (item: { data: any }) => ({
                                id: item.data.id,
                                author: item.data.author,
                                body: item.data.body,
                                boby_html: item.data.body_html,
                                created_utc: item.data.created_utc,
                                replies: item.data.replies ? getFormattedComments(item.data.replies.data.children) : null,
                            })
                        );

                        return comments;
                    };

                    if (isMounted) {
                        setCommentsData(getFormattedComments(response.data[1].data.children));
                    }
                }
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        };

        fetchData();

        // Функция очистки, вызывается при размонтировании компонента
        return () => {
            isMounted = false;
        };
    }, [token, postId]);

    return [commentsData];
};
