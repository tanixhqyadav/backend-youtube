import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
// ! is a popular Mongoose plugin that adds pagination capabilities to Mongoose’s aggregate queries.

const videoSchema = new Schema(
    {
        videoFile: {
            type: String, //cloudinary url , we keep these in seprate service further we can put them in mongodb becasue keep them in 
            // mongo will load database 
            required: true
        },
        thumbnail: {
            type: String, //cloudinary url
            required: true
        },
        title: {
            type: String, 
            required: true
        },
        description: {
            type: String, 
            required: true
        },
        duration: {
            type: Number, 
            required: true
        },
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            // ! means video show krna hai yha nhi 
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }

    }, 
    {
        timestamps: true
    }
)

videoSchema.plugin(mongooseAggregatePaginate)
//* A Mongoose plugin is essentially a reusable piece of code that can be applied to one or more Mongoose schemas to add specific 
//*functionalities or behaviors. Plugins help in maintaining DRY  (Don't Repeat Yourself) principles by allowing you to abstract 
//*and reuse common schema features across different models.
export const Video=mongoose.model("Video", videoSchema)