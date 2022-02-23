import React from 'react';
import { styled, Stack, Button } from '@mui/material';

const Upload = ({image, onChange} : {image: string; onChange: (e: any) => void;}) => {
    const Input = styled("input")({
        display: "none"
    });
    return (
        <div>
            <div style={{width: "100px", borderRadius: 50}}>
            {image && (
                <img
                style={{
                    width: "100px",
                    borderRadius: 50,
                    backgroundColor: "blue"
                }}
                src={image}
                    alt="project"
                    />
                    )}
            </div>
            <Stack direction="row" alignItems="center" spacing={2}>
                <label htmlFor="contained-button-file">
                    <Input accept='image/*' id="contained-button-file" type="file" onChange={onChange}/>
                    <Button variant="contained" component="span" >Upload</Button>
                </label>
            </Stack>
        </div>
    )
}

export default Upload;