import React from 'react';

export default ({value, onChange}) =>
    <div>
        <label>Test</label>
        <input type="text"
               value={value}
               onChange={e => onChange(e.target.value)}
        />
    </div>;
