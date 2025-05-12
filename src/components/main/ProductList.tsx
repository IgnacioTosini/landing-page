import { useInstagramPosts } from '../../hooks/useInstagramPosts';
import { CardItem } from './CardItem';
import { CardItemSkeleton } from '../shared/CardItemSkeleton';
import '../../styles/components/main/_productList.scss';

export const ProductList = () => {
    const { posts, loadMorePosts, loading, hasMore } = useInstagramPosts(10);

    return (
        <>
            <head>
                <meta
                    name="description"
                    content="Descubre nuestros collares artesanales hechos a mano con materiales naturales"
                />
                <meta property="og:title" content="Collares Artesanales - Hechos a Mano" />
                <meta
                    property="og:description"
                    content="Descubre nuestros collares artesanales hechos a mano con materiales naturales"
                />
                <meta property="og:image" content={posts[0]?.media_url} />
                <meta name="twitter:card" content="summary_large_image" />
            </head>

            <section className="productList">
                <div className="products-container">
                    {loading && posts.length === 0
                        ? Array.from({ length: 3 }).map((_, i) => <CardItemSkeleton key={i} />)
                        : posts.map(post => (
                            <CardItem key={post.id} post={post} />
                        ))}
                </div>
                {hasMore && (
                    <div className="pagination">
                        <button onClick={loadMorePosts} disabled={loading}>
                            {loading ? 'Cargando...' : 'Cargar más'}
                        </button>
                    </div>
                )}
            </section>
        </>
    );
};