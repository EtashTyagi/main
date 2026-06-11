/* eslint-disable jsx-a11y/anchor-has-content */
import React, {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {MarkdownContainer} from './style';
import {Typography} from "@mui/material";

interface MarkdownRendererProps {
    slug: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({slug}) => {
    const [content, setContent] = useState<string>('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMarkdown = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch(`/projects/${slug}.md`);
                if (!response.ok) {
                    throw new Error(`Failed to load project details`);
                }
                const text = await response.text();
                setContent(text);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load project details');
            } finally {
                setLoading(false);
            }
        };

        fetchMarkdown();
    }, [slug]);

    if (loading) {
        return <Typography>Loading...</Typography>;
    }

    if (error) {
        return <Typography color="error">{error}</Typography>;
    }

    return (
        <MarkdownContainer>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    a: ({node, ...props}) => (
                        <a {...props} target="_blank" rel="noreferrer" />
                    ),
                }}
            >
                {content}
            </ReactMarkdown>
        </MarkdownContainer>
    );
};

export default MarkdownRenderer;
