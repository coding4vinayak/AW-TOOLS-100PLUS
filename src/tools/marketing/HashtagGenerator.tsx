import React, { useState } from 'react';
import ToolWrapper from '../../components/ToolWrapper';
import LeadCaptureForm from '../../components/LeadCaptureForm';

const HashtagGenerator: React.FC = () => {
  const [keywords, setKeywords] = useState('');
  const [platform, setPlatform] = useState('instagram');
  const [hashtags, setHashtags] = useState('');

  const generate = () => {
    if (!keywords.trim()) return;
    
    const keywordList = keywords.split(',').map(k => k.trim()).filter(k => k);
    const baseHashtags = keywordList.map(k => `#${k.replace(/\s/g, '')}`);
    
    const popularTags: Record<string, string[]> = {
      instagram: ['#love', '#instagood', '#photooftheday', '#beautiful', '#happy', '#tbt', '#picoftheday', '#follow', '#nature', '#like4like'],
      twitter: ['#trending', '#viral', '#news', '#tech', '#business', '#marketing', '#startup', '#innovation', '#digital', '#socialmedia'],
      linkedin: ['#leadership', '#business', '#career', '#networking', '#professional', '#industry', '#growth', '#success', '#entrepreneur', '#management'],
      tiktok: ['#fyp', '#viral', '#trending', '#foryou', '#tiktok', '#funny', '#dance', '#challenge', '#comedy', '#music']
    };

    const nicheTags = keywordList.flatMap(k => [
      `#${k}life`, `#${k}tips`, `#${k}lover`, `#${k}gram`, `#${k}daily`,
      `#${k}inspiration`, `#${k}goals`, `#${k}community`, `#${k}style`, `#${k}time`
    ]);

    const platformTags = popularTags[platform] || [];
    const allTags = [...baseHashtags, ...platformTags, ...nicheTags];
    const unique = [...new Set(allTags)].slice(0, 30);

    // Group by size
    const output = `
# HASHTAG SET FOR ${platform.toUpperCase()}
## Keywords: ${keywords}

---

### Copy All (30 tags)
${unique.join(' ')}

---

### By Category

**Primary Tags:**
${baseHashtags.join(' ')}

**Popular/Trending:**
${platformTags.join(' ')}

**Niche Tags:**
${nicheTags.slice(0, 10).join(' ')}

---

### Platform Tips

${platform === 'instagram' ? `- Use 15-30 hashtags per post
- Mix popular and niche tags
- Place in caption or first comment
- Avoid banned hashtags` : platform === 'twitter' ? `- Use 1-3 hashtags per tweet
- Keep them relevant to the conversation
- Create branded hashtags for campaigns
- Jump on trending topics` : platform === 'linkedin' ? `- Use 3-5 hashtags per post
- Include industry-specific tags
- Follow hashtag pages for engagement
- Create company hashtags` : `- Use 3-5 hashtags per video
- Include #fyp for algorithm boost
- Create challenge hashtags
- Use trending sounds with tags`}
`.trim();

    setHashtags(output);
  };

  return (
    <ToolWrapper
      title="Hashtag Generator"
      description="Generate relevant hashtags for your social media posts across platforms"
      icon="#️⃣"
      inputValue={keywords}
      outputValue={hashtags}
      outputLabel="Generated Hashtags"
      showCopy={true}
      showDownload={true}
      downloadFilename="abetworks-hashtags.txt"
    >
      <div className="row g-3">
        <div className="col-12">
          <label className="form-label">Keywords (comma-separated) *</label>
          <input
            type="text"
            className="form-control"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="e.g., fitness, health, workout"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Platform</label>
          <select className="form-select" value={platform} onChange={(e) => setPlatform(e.target.value)}>
            <option value="instagram">Instagram</option>
            <option value="twitter">Twitter/X</option>
            <option value="linkedin">LinkedIn</option>
            <option value="tiktok">TikTok</option>
            <option value="facebook">Facebook</option>
            <option value="youtube">YouTube</option>
          </select>
        </div>
        <div className="col-12">
          <button className="btn btn-primary btn-lg" onClick={generate}>#️⃣ Generate Hashtags</button>
        </div>
      </div>
      <div className="mt-4"><LeadCaptureForm toolName="Hashtag Generator" compact /></div>
    </ToolWrapper>
  );
};

export default HashtagGenerator;
