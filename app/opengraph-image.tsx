import OpengraphImage from "@/components/OpenGraphImage";

export const runtime = "edge";

export default async function Image() {
    return await OpengraphImage();
}
