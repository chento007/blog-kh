import {Spinner} from "@nextui-org/spinner";

export default function LoadingSpinner() {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.8)', // A semi-transparent background to cover the content
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
        }}>
            <Spinner label="Loading..." color="warning" />
        </div>
    );
}
