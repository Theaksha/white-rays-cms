import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { getCMSData, saveCMSData, resetCMSData, uploadLogo, CMSData } from "@/lib/cms";
import { Save, RotateCcw, ArrowLeft, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [data, setData] = useState<CMSData | null>(null);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const cmsData = await getCMSData();
      setData(cmsData);
    } catch (error) {
      console.error('Failed to load data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!data) return;
    try {
      await saveCMSData(data);
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch (error) {
      console.error('Failed to save:', error);
    }
  };

  const handleReset = async () => {
    try {
      await resetCMSData();
      await loadData();
    } catch (error) {
      console.error('Failed to reset:', error);
    }
  };

  const handleFileUpload = async (file: File) => {
    if (!data) return;
    setUploading(true);
    try {
      const logoUrl = await uploadLogo(file);
      setData({...data, branding: {...data.branding, logoUrl}});
    } catch (error) {
      console.error('Failed to upload:', error);
    } finally {
      setUploading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-muted/30 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-cyan mx-auto mb-4"></div>
          <p>Loading CMS...</p>
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="min-h-screen bg-muted/30 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button variant="outline" onClick={() => navigate("/")} size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Site
            </Button>
            <h1 className="text-3xl font-bold">CMS Admin</h1>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" onClick={handleReset}>
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
            <Button onClick={handleSave} className={saved ? "bg-green-600" : ""}>
              <Save className="w-4 h-4 mr-2" />
              {saved ? "Saved!" : "Save"}
            </Button>
          </div>
        </div>

        <Tabs defaultValue="hero" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="branding">Branding</TabsTrigger>
            <TabsTrigger value="hero">Hero</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          <TabsContent value="branding">
            <Card>
              <CardHeader>
                <CardTitle>Branding & Logo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Logo Text (for text logo)</Label>
                  <Input
                    value={data.branding.logoText}
                    onChange={(e) => setData({...data, branding: {...data.branding, logoText: e.target.value}})}
                    placeholder="WR"
                  />
                </div>
                <div>
                  <Label>Company Name</Label>
                  <Input
                    value={data.branding.companyName}
                    onChange={(e) => setData({...data, branding: {...data.branding, companyName: e.target.value}})}
                    placeholder="WHITE RAYS TECHNOLOGIES"
                  />
                </div>
                <div>
                  <Label>Logo Image</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleFileUpload(file);
                        }}
                        className="block w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-gradient-brand file:text-white hover:file:opacity-90"
                        disabled={uploading}
                      />
                      {uploading && (
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Upload className="w-4 h-4 animate-pulse" />
                          <span>Uploading...</span>
                        </div>
                      )}
                    </div>
                    <Input
                      value={data.branding.logoUrl || ""}
                      onChange={(e) => setData({...data, branding: {...data.branding, logoUrl: e.target.value}})}
                      placeholder="Or paste image URL"
                    />
                    {data.branding.logoUrl && (
                      <div className="flex items-center space-x-2">
                        <img src={data.branding.logoUrl} alt="Logo preview" className="w-10 h-10 rounded-lg object-cover" />
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => setData({...data, branding: {...data.branding, logoUrl: ""}})}
                        >
                          Remove
                        </Button>
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Upload image file or paste URL. Recommended size: 40x40px
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="hero">
            <Card>
              <CardHeader>
                <CardTitle>Hero Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Title</Label>
                  <Input
                    value={data.hero.title}
                    onChange={(e) => setData({...data, hero: {...data.hero, title: e.target.value}})}
                  />
                </div>
                <div>
                  <Label>Subtitle</Label>
                  <Input
                    value={data.hero.subtitle}
                    onChange={(e) => setData({...data, hero: {...data.hero, subtitle: e.target.value}})}
                  />
                </div>
                <div>
                  <Label>Description</Label>
                  <Textarea
                    value={data.hero.description}
                    onChange={(e) => setData({...data, hero: {...data.hero, description: e.target.value}})}
                    rows={4}
                  />
                </div>
                <div>
                  <Label>Statistics</Label>
                  {data.hero.stats.map((stat, index) => (
                    <div key={index} className="flex space-x-2 mt-2">
                      <Input
                        placeholder="Value"
                        value={stat.value}
                        onChange={(e) => {
                          const newStats = [...data.hero.stats];
                          newStats[index].value = e.target.value;
                          setData({...data, hero: {...data.hero, stats: newStats}});
                        }}
                      />
                      <Input
                        placeholder="Label"
                        value={stat.label}
                        onChange={(e) => {
                          const newStats = [...data.hero.stats];
                          newStats[index].label = e.target.value;
                          setData({...data, hero: {...data.hero, stats: newStats}});
                        }}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services">
            <Card>
              <CardHeader>
                <CardTitle>Services Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Title</Label>
                  <Input
                    value={data.services.title}
                    onChange={(e) => setData({...data, services: {...data.services, title: e.target.value}})}
                  />
                </div>
                <div>
                  <Label>Description</Label>
                  <Textarea
                    value={data.services.description}
                    onChange={(e) => setData({...data, services: {...data.services, description: e.target.value}})}
                    rows={3}
                  />
                </div>
                <div>
                  <Label>Services</Label>
                  {data.services.items.slice(0, 4).map((service, index) => (
                    <Card key={index} className="mt-4">
                      <CardContent className="pt-4 space-y-2">
                        <Input
                          placeholder="Service Title"
                          value={service.title}
                          onChange={(e) => {
                            const newItems = [...data.services.items];
                            newItems[index].title = e.target.value;
                            setData({...data, services: {...data.services, items: newItems}});
                          }}
                        />
                        <Textarea
                          placeholder="Service Description"
                          value={service.description}
                          onChange={(e) => {
                            const newItems = [...data.services.items];
                            newItems[index].description = e.target.value;
                            setData({...data, services: {...data.services, items: newItems}});
                          }}
                          rows={2}
                        />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects">
            <Card>
              <CardHeader>
                <CardTitle>Projects Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Title</Label>
                  <Input
                    value={data.projects.title}
                    onChange={(e) => setData({...data, projects: {...data.projects, title: e.target.value}})}
                  />
                </div>
                <div>
                  <Label>Description</Label>
                  <Textarea
                    value={data.projects.description}
                    onChange={(e) => setData({...data, projects: {...data.projects, description: e.target.value}})}
                    rows={3}
                  />
                </div>
                <div>
                  <Label>Projects</Label>
                  {data.projects.items.map((project, index) => (
                    <Card key={index} className="mt-4">
                      <CardContent className="pt-4 space-y-2">
                        <Input
                          placeholder="Project Title"
                          value={project.title}
                          onChange={(e) => {
                            const newItems = [...data.projects.items];
                            newItems[index].title = e.target.value;
                            setData({...data, projects: {...data.projects, items: newItems}});
                          }}
                        />
                        <Textarea
                          placeholder="Project Description"
                          value={project.description}
                          onChange={(e) => {
                            const newItems = [...data.projects.items];
                            newItems[index].description = e.target.value;
                            setData({...data, projects: {...data.projects, items: newItems}});
                          }}
                          rows={2}
                        />
                        <Input
                          placeholder="Tags (comma separated)"
                          value={project.tags.join(", ")}
                          onChange={(e) => {
                            const newItems = [...data.projects.items];
                            newItems[index].tags = e.target.value.split(", ").filter(tag => tag.trim());
                            setData({...data, projects: {...data.projects, items: newItems}});
                          }}
                        />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Phone</Label>
                  <Input
                    value={data.contact.phone}
                    onChange={(e) => setData({...data, contact: {...data.contact, phone: e.target.value}})}
                  />
                </div>
                <div>
                  <Label>Email</Label>
                  <Input
                    value={data.contact.email}
                    onChange={(e) => setData({...data, contact: {...data.contact, email: e.target.value}})}
                  />
                </div>
                <div>
                  <Label>Address</Label>
                  <Input
                    value={data.contact.address}
                    onChange={(e) => setData({...data, contact: {...data.contact, address: e.target.value}})}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;