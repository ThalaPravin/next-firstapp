interface RouteParams {
    params: {
        routeId: string;
    };
}

export default function DefaultRoutePage({ params }: RouteParams) {
    const { routeId } = params;

    return (
        <div className="bg-black text-white w-full h-screen flex justify-center items-center">
            <h1>Route ID: {routeId}</h1>
        </div>
    );
}