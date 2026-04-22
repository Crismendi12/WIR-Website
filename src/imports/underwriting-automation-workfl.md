Create a new full-width section called "Underwriting Automation" that visualizes an insurance underwriting workflow as a 3D isometric pipeline -- similar to how Make.com or n8n display their automation nodes.

Layout: Dark background (#0B0E17). The workflow flows left-to-right across the full width, with 7 connected nodes arranged in a slight downward staircase pattern to create depth. Each node is an isometric-style card tilted at approximately 5-8 degrees on the Y axis using CSS perspective and transform: rotateY(5deg) rotateX(2deg). Add a subtle translateZ layer so cards appear to float above the background.

The 7 workflow nodes (left to right):

"Application Intake" -- Icon: document/clipboard. Subtitle: "Broker submits via portal or API". Color accent on left border: #3B82F6 (blue).
"AI Document Extraction" -- Icon: brain/scan. Subtitle: "OCR + NLP parse all attachments". Color accent: #8B5CF6 (purple).
"Risk Assessment" -- Icon: shield/chart. Subtitle: "Analyze loss history, credit, exposure". Color accent: #A855F7 (violet).
"Pricing Engine" -- Icon: calculator. Subtitle: "Auto-calculate premium with rating tables". Color accent: #D946EF (fuchsia).
"Decision Engine" -- Icon: check-circle/branch. Subtitle: "Approve / Refer / Decline in <2s". Color accent: #F97316 (orange).
"Policy Issuance" -- Icon: file-check. Subtitle: "Generate policy docs + endorsements". Color accent: #F59E0B (amber).
"Notification & Binding" -- Icon: send/bell. Subtitle: "Notify broker, bind coverage, log audit". Color accent: #10B981 (green).
Node card styling: Each card should be a glass-morphism rectangle (180px wide, 200px tall) with background rgba(255,255,255,0.04), border 1px solid rgba(255,255,255,0.08), backdrop-filter blur(12px), border-radius 16px. Inside each card: the colored icon (40px) at top, bold white title (14px, font-weight 600), muted gray subtitle (12px, color #9CA3AF), and a small step number badge in the top-right corner (e.g. "01", "02") using the accent color.

Connections between nodes: Animated dashed lines connecting each node to the next, using SVG path elements. The lines should have a subtle gradient from the current node's accent color to the next node's accent color. Add a small animated dot (4px circle) that travels along each line continuously using CSS animation (8s linear infinite), creating the appearance of data flowing through the pipeline.

3D depth effect: Use CSS perspective(1200px) on the container. Cards closer to the center should appear slightly larger (scale 1.05) and cards at the edges slightly smaller (scale 0.95). Add box-shadow: 0 20px 60px rgba(0,0,0,0.4) on each card for depth. Add a subtle radial gradient glow beneath each card matching its accent color at 5% opacity.

Section header above the workflow: Small label "POWERED BY WIR" in uppercase, letter-spacing 3px, color #F97316, font-size 10px. Below that, heading "End-to-End Underwriting in Under 60 Seconds" in white, font-size 32px, font-weight 700. Subtitle: "From application intake to policy binding -- fully automated, fully auditable." in #9CA3AF, font-size 16px.

Bottom stats bar below the workflow: Three metrics in a horizontal row, centered:

"< 60s" with label "Average Processing Time"
"97.3%" with label "Straight-Through Rate"
"Zero" with label "Manual Touchpoints"
Stats should use large white bold numbers (28px) and small muted gray labels (12px). Separate them with subtle vertical dividers (1px, rgba(255,255,255,0.1)).

Animation on scroll: Use an intersection observer. When the section scrolls into view, stagger-animate each node card from opacity 0 / translateY(40px) to visible, with a 150ms delay between each node (left to right), creating a sequential reveal effect that reinforces the pipeline flow.

