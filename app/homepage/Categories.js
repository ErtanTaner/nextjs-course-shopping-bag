import styles from './categories.module.css';
import CategoryList from './CategoryList';
import ErrorBoundary from '../components/ErrorBoundary';
import Link from 'next/link';

export default function Categories() {
    return (
        <div className={styles.categories}>
            <h2>Our Categories</h2>
            <ErrorBoundary fallback="Could not get the categories, please refresh the page">
                <CategoryList />
            </ErrorBoundary>
        </div>
    );
}
