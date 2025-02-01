import { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, Upload } from "lucide-react";

type FormData = {
  category: string;
  title: string;
  description: string;
  priority: string;
  location: string;
  anonymous: boolean;
  name?: string;
  email?: string;
  phone?: string;
};

const ReportIssue = () => {
  const { toast } = useToast();
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [files, setFiles] = useState<FileList | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    if (!files || files.length === 0) {
      toast({
        title: "Error",
        description: "Please upload at least one photo.",
        variant: "destructive",
      });
      return;
    }

    console.log(data, files);
    toast({
      title: "Report Submitted Successfully",
      description: "You will receive updates on its progress.",
    });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto py-8 px-4 max-w-3xl bg-white/80 backdrop-blur-md p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-foreground text-center">Report an Issue</h1>
        <p className="text-muted-foreground mb-8 text-center">
          Help us resolve campus issues quickly and effectively. Please fill out the details below.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Category Selection */}
          <div className="space-y-2">
            <Label className="font-semibold">Issue Category <span className="text-red-500">*</span></Label>
            <Select {...register("category", { required: true })}>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="maintenance">Maintenance</SelectItem>
                <SelectItem value="facilities">Facilities</SelectItem>
                <SelectItem value="safety">Safety</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.category && <span className="text-red-500">This field is required</span>}
          </div>

          {/* Title and Description */}
          <div className="space-y-2">
            <Label className="font-semibold" htmlFor="title">Title <span className="text-red-500">*</span></Label>
            <Input
              id="title"
              placeholder="Brief title of the issue"
              className="font-semibold"
              {...register("title", { required: true })}
            />
            {errors.title && <span className="text-red-500">This field is required</span>}
          </div>

          <div className="space-y-2">
            <Label className="font-semibold" htmlFor="description">Description <span className="text-red-500">*</span></Label>
            <Textarea
              id="description"
              placeholder="Provide detailed information about the issue"
              className="min-h-[100px] font-semibold"
              {...register("description", { required: true })}
            />
            {errors.description && <span className="text-red-500">This field is required</span>}
          </div>

          {/* File Upload */}
          <div className="space-y-2">
            <Label className="font-semibold">Upload Photos <span className="text-red-500">*</span></Label>
            <div className="border-2 border-dashed rounded-lg p-8 text-center bg-white/50 backdrop-blur-md">
              <Input
                type="file"
                multiple
                accept="image/*,.pdf"
                className="hidden"
                id="file-upload"
                onChange={(e) => setFiles(e.target.files)}
              />
              <Label
                htmlFor="file-upload"
                className="cursor-pointer flex flex-col items-center"
              >
                <Upload className="h-12 w-12 text-muted-foreground mb-4" />
                <span className="text-muted-foreground">
                  Drag and drop files here or click to browse
                </span>
              </Label>
            </div>
            {!files || files.length === 0 && <span className="text-red-500">This field is required</span>}
          </div>

          {/* Location */}
          <div className="space-y-2">
            <Label className="font-semibold" htmlFor="location">Location <span className="text-red-500">*</span></Label>
            <div className="flex gap-2">
              <Input
                id="location"
                placeholder="Enter the location of the issue"
                className="font-semibold"
                {...register("location", { required: true })}
              />
              <Button type="button" variant="outline" size="icon">
                <MapPin className="h-4 w-4" />
              </Button>
            </div>
            {errors.location && <span className="text-red-500">This field is required</span>}
          </div>

          {/* Priority Level */}
          <div className="space-y-2 text-center">
            <Label className="font-semibold">Priority Level <span className="text-red-500">*</span></Label>
            <RadioGroup defaultValue="medium">
              <div className="flex gap-4 justify-center">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="high" id="high" />
                  <Label htmlFor="high">High</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="medium" id="medium" />
                  <Label htmlFor="medium">Medium</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="low" id="low" />
                  <Label htmlFor="low">Low</Label>
                </div>
              </div>
            </RadioGroup>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 ">
            <div className="flex items-center space-x-2 ">
              <Checkbox
                id="anonymous"
                checked={isAnonymous}
                onCheckedChange={(checked) => setIsAnonymous(checked as boolean)}
              />
              <Label className="font-semibold" htmlFor="anonymous">Remain Anonymous</Label>
            </div>

            {!isAnonymous && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" {...register("name")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" {...register("email")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" {...register("phone")} />
                </div>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full bg-primary text-white">
            Submit Report
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ReportIssue;
