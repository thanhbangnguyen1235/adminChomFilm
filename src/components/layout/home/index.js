import React from 'react'
import TableFilmHot from './data'


function createData(title, id, release_date, renuve, star) {
    return { title, id, release_date, renuve, star };
}

const rows = [
    createData('India', 12, 'IN', 1324171354, 3287263),
    createData('China', 4342, 'CN', 1403500365, 9596961),
    createData('Italy', 3242, 'IT', 60483973, 301340),
    createData('United States', 43423, 'US', 327167434, 9833520),
    createData('Canada', 4464, 'CA', 37602103, 9984670),
    createData('Australia', 567567, 'AU', 25475400, 7692024),
    createData('Germany', 5675, 'DE', 83019200, 357578),
    createData('India', 12, 'IN', 1324171354, 3287263),
    createData('China', 4342, 'CN', 1403500365, 9596961),
    createData('Italy', 3242, 'IT', 60483973, 301340),
    createData('United States', 43423, 'US', 327167434, 9833520),
    createData('Canada', 4464, 'CA', 37602103, 9984670),
    createData('Australia', 567567, 'AU', 25475400, 7692024),
    createData('Germany', 5675, 'DE', 83019200, 357578),
    createData('India', 12, 'IN', 1324171354, 3287263),
    createData('China', 4342, 'CN', 1403500365, 9596961),
    createData('Italy', 3242, 'IT', 60483973, 301340),
    createData('United States', 43423, 'US', 327167434, 9833520),
    createData('Canada', 4464, 'CA', 37602103, 9984670),
    createData('Australia', 567567, 'AU', 25475400, 7692024),
    createData('Germany', 5675, 'DE', 83019200, 357578),
    createData('India', 12, 'IN', 1324171354, 3287263),
    createData('China', 4342, 'CN', 1403500365, 9596961),
    createData('Italy', 3242, 'IT', 60483973, 301340),
    createData('United States', 43423, 'US', 327167434, 9833520),
    createData('Canada', 4464, 'CA', 37602103, 9984670),
    createData('Australia', 567567, 'AU', 25475400, 7692024),
    createData('Germany', 5675, 'DE', 83019200, 357578),

];

export default function index() {
    return (
        <TableFilmHot rows={rows} />
    )
}
