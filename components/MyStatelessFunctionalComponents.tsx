import * as React from 'react';

export const FullName = (props: { first: string, last: string }) => {
    return (
        <div>
            <div>Name: {props.first}</div>
            <div>{props.last}</div>
        </div>
    );
}