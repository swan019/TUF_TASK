import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';


// Create the context
export const BannerContext = createContext();

// Create a provider component
export const BannerProvider = ({ children }) => {
    const [banners, setBanners] = useState([]);

    useEffect(() => {
        // Fetch banners from server
        axios.get('https://tuf-task-1.vercel.app/api/banners')
            .then(response => {
                setBanners(response.data);
                
            })
            .catch(error => {
                console.error('There was an error fetching the banners!', error);
            });
    }, []);

    console.log(banners);

    // Add banner
    const addBanner = (newBanner) => {
        axios.post('https://tuf-task-1.vercel.app/api/banners', newBanner)
            .then(response => {
                setBanners([...banners, response.data]);
            })
            .catch(error => {
                console.error('There was an error adding the banner!', error);
            });
    };

    // Update banner visibility
    const toggleVisibility = (id, bannerVisible) => {
        axios.put(`https://tuf-task-1.vercel.app/api/banners/${id}`, { bannerVisible })
            .then(() => {
                setBanners(banners.map(banner => 
                    banner._id === id ? { ...banner, bannerVisible: !banner.bannerVisible } : banner
                ));
            })
            .catch(error => {
                console.error('There was an error updating the banner visibility!', error);
            });
    };

    // Delete banner
    const deleteBanner = (id) => {
        console.log(id);
        
        axios.delete(`https://tuf-task-1.vercel.app/api/banners/${id}`)
            .then(() => {
                setBanners(banners.filter(banner => banner._id !== id));
            })
            .catch(error => {
                console.error('There was an error deleting the banner!', error);
            });
    };

    return (
        <BannerContext.Provider value={{ banners, toggleVisibility, deleteBanner, setBanners,addBanner }}>
            {children}
        </BannerContext.Provider>
    );
};
