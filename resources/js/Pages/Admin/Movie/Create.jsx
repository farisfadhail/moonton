import Authenticated from "@/Layouts/Authenticated/Index";
import Label from "@/Components/InputLabel";
import Input from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import Checkbox from "@/Components/Checkbox";
import Button from "@/Components/PrimaryButton";
import { Head, useForm } from "@inertiajs/inertia-react";

export default function Create({ auth }) {
    const { setData, post, processing, errors } = useForm({
        name: "",
        category: "",
        video_url: "",
        thumbnail: "",
        rating: "",
        is_featured: false,
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.dashboard.movie.store"));
    };

    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Create Movie" />
            <h1 className="text-xl">Insert a new Movie</h1>
            <hr className="mb-4"></hr>
            <form onSubmit={submit}>
                <div>
                    <Label forInput="name" value="Name" />
                    <Input
                        className="mt-2"
                        type="text"
                        name="name"
                        variant="primary-outline"
                        handleChange={onHandleChange}
                        placeholder="Enter the name of the movie"
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>
                <div className="mt-4">
                    <Label forInput="category" value="Category" />
                    <Input
                        className="mt-2"
                        type="text"
                        name="category"
                        variant="primary-outline"
                        handleChange={onHandleChange}
                        placeholder="Enter the category of the movie"
                    />
                    <InputError message={errors.category} className="mt-2" />
                </div>
                <div className="mt-4">
                    <Label forInput="video_url" value="Video URL" />
                    <Input
                        className="mt-2"
                        type="url"
                        name="video_url"
                        variant="primary-outline"
                        handleChange={onHandleChange}
                        placeholder="Enter the video url of the movie"
                    />
                    <InputError message={errors.video_url} className="mt-2" />
                </div>
                <div className="mt-4">
                    <Label forInput="thumbnail" value="Thumbnail" />
                    <Input
                        type="file"
                        name="thumbnail"
                        variant="primary-outline"
                        handleChange={onHandleChange}
                        placeholder="Insert thumbnail of the movie"
                    />
                    <InputError message={errors.thumbnail} className="mt-2" />
                </div>
                <div className="mt-4">
                    <Label forInput="rating" value="Rating" />
                    <Input
                        className="mt-2"
                        type="number"
                        name="rating"
                        variant="primary-outline"
                        handleChange={onHandleChange}
                        placeholder="Enter the rating of the movie"
                    />
                    <InputError message={errors.rating} className="mt-2" />
                </div>
                <div className="flex flex-row mt-8 items-center">
                    <div className="mr-12">
                        <Label forInput="is_featured" value="Is Featured" />
                    </div>
                    <Checkbox
                        name="is_featured"
                        handleChange={(e) =>
                            setData("is_featured", e.target.checked)
                        }
                    />
                </div>
                <Button type="submit" className="mt-8" processing={processing}>
                    Save
                </Button>
            </form>
        </Authenticated>
    );
}
