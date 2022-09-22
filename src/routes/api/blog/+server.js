export async function get({ params }){
    const file = `/src/data/blog/${params.slug}.md`;
    const pdfs = import.meta.glob(('./*.pdf', { as: 'raw' });
    const pdf = pdfs[file];
  
    return {
      status:200,
      headers: {
        "Content-type" : "application/pdf",
        "Content-Disposition": "attachment; filename="+params.file+".pdf"
      },
      body: pdf
    }
  }