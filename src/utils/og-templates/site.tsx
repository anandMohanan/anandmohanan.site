import satori from "satori";
import { SITE } from "@config";
import loadGoogleFonts, { type FontOptions } from "../loadGoogleFont";

export default async () => {
    return satori(
        <div
            style={{
                display: 'flex',
                fontSize: 24,
                fontWeight: 600,
                textAlign: 'left',
                padding: 70,
                color: 'red',
                backgroundImage: 'linear-gradient(to right, #006400, #000000)',
                height: '100%',
                width: '100%',
                position: 'relative',
            }}
        >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px', color: '#fff' }}>
                    Anand Mohanan
                    <div style={{ fontWeight: 100 }}>Crafting solutions with precision and elegance.</div>
                </div>
            </div>
            <div
                style={{
                    position: 'absolute',
                    bottom: 20,
                    right: 20,
                    fontSize: 28,
                    fontWeight: 'bold',
                    color: '#ff45',
                }}
            >
                anandmohanan.site
            </div>
        </div>
        ,
        {
            width: 1200,
            height: 630,
            embedFont: true,
            fonts: (await loadGoogleFonts(
                SITE.title + SITE.desc + SITE.website
            )) as FontOptions[],
        }
    );
};
