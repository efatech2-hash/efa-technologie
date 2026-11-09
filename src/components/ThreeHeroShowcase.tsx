import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { Eye, RotateCw, Layers, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export default function ThreeHeroShowcase() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [isAutoRotate, setIsAutoRotate] = useState(true);
  const [isExploded, setIsExploded] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'aconta' | 'suite' | 'garde'>('all');
  const [isDockCollapsed, setIsDockCollapsed] = useState(false);

  // References to communicate with Three.js animation loop without re-rendering canvas
  const stateRef = useRef({
    isAutoRotate: true,
    isExploded: false,
    activeTab: 'all' as 'all' | 'aconta' | 'suite' | 'garde',
  });

  useEffect(() => {
    stateRef.current.isAutoRotate = isAutoRotate;
  }, [isAutoRotate]);

  useEffect(() => {
    stateRef.current.isExploded = isExploded;
  }, [isExploded]);

  useEffect(() => {
    stateRef.current.activeTab = activeTab;
  }, [activeTab]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect software WebGL guard
    const isSoftwareGl = (() => {
      const gl = document.createElement('canvas').getContext('webgl2');
      if (!gl) return true;
      const ext = gl.getExtension('WEBGL_debug_renderer_info');
      const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
      const gpu = String(gl.getParameter(param));
      gl.getExtension('WEBGL_lose_context')?.loseContext();
      return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
    })();

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 480;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 1.2, 5.2);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // Studio Environment map using RoomEnvironment
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 + 0.1;
    controls.minDistance = 3.2;
    controls.maxDistance = 8.0;
    controls.autoRotate = false;

    // Lighting Rig
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x1e293b, 1.0);
    scene.add(hemiLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
    keyLight.position.set(4, 6, 5);
    keyLight.castShadow = !isSoftwareGl;
    if (keyLight.castShadow) {
      keyLight.shadow.mapSize.width = 1024;
      keyLight.shadow.mapSize.height = 1024;
      keyLight.shadow.bias = -0.0005;
    }
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x0A3D8F, 1.4);
    fillLight.position.set(-5, 2, -2);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0x38bdf8, 1.8, 10);
    rimLight.position.set(0, 3, -3);
    scene.add(rimLight);

    // Root Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // --- PROCEDURAL TEXTURES ---
    // 1. Procedural Screen Texture
    const screenCanvas = document.createElement('canvas');
    screenCanvas.width = 1024;
    screenCanvas.height = 1920;
    const ctx = screenCanvas.getContext('2d')!;

    function drawScreenContent(type: 'all' | 'aconta' | 'suite' | 'garde') {
      // Background gradient
      const bgGrad = ctx.createLinearGradient(0, 0, 0, 1920);
      bgGrad.addColorStop(0, '#0A3D8F');
      bgGrad.addColorStop(0.35, '#0E2A68');
      bgGrad.addColorStop(1, '#06163A');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, 1024, 1920);

      // Top Status Bar
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 34px sans-serif';
      ctx.fillText('09:41', 70, 75);

      // Battery / Signal
      ctx.fillRect(890, 52, 45, 22);
      ctx.fillRect(938, 58, 4, 10);
      ctx.fillRect(820, 64, 8, 10);
      ctx.fillRect(835, 58, 8, 16);
      ctx.fillRect(850, 50, 8, 24);

      // App Header
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 52px sans-serif';
      ctx.fillText('EFA TECHNOLOGIE', 70, 180);

      ctx.fillStyle = '#93c5fd';
      ctx.font = '32px sans-serif';
      ctx.fillText('La facilité de la technologie', 70, 230);

      // Active Solution Card
      const cardY = 280;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.beginPath();
      ctx.roundRect(60, cardY, 904, 380, 28);
      ctx.fill();

      // Card Title & Status
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 44px sans-serif';
      const title =
        type === 'aconta'
          ? 'EFA ACONTA'
          : type === 'suite'
          ? 'EFA SUITE (Facture & EFA Mon prix)'
          : type === 'garde'
          ? 'EFA GARDE'
          : 'Écosystème EFA Tech';
      ctx.fillText(title, 100, cardY + 70);

      ctx.fillStyle = '#67e8f9';
      ctx.font = '30px sans-serif';
      const sub =
        type === 'aconta'
          ? 'Trésorerie & Comptabilité FCFA'
          : type === 'suite'
          ? 'Facture OTR & Calcul EFA Mon prix'
          : type === 'garde'
          ? 'Pharmacies de garde à Lomé & contact'
          : 'Solutions d\'Entreprise au Togo';
      ctx.fillText(sub, 100, cardY + 120);

      // Metrics in Card
      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.beginPath();
      ctx.roundRect(100, cardY + 155, 380, 160, 20);
      ctx.roundRect(524, cardY + 155, 400, 160, 20);
      ctx.fill();

      ctx.fillStyle = '#94a3b8';
      ctx.font = '26px sans-serif';
      ctx.fillText('Chiffre d\'Affaires (FCFA)', 125, cardY + 205);
      ctx.fillText('Statut Synchronisation', 550, cardY + 205);

      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 40px monospace';
      ctx.fillText('14 850 000 F', 125, cardY + 265);

      ctx.fillStyle = '#4ade80';
      ctx.font = 'bold 36px sans-serif';
      ctx.fillText('Actif · En Ligne', 550, cardY + 265);

      // 3 Quick App Icons
      const apps = [
        { name: 'EFA ACONTA', color: '#2563eb', desc: 'Comptabilité' },
        { name: 'EFA SUITE', color: '#0d9488', desc: 'Facture + EFA Mon prix' },
        { name: 'EFA GARDE', color: '#16a34a', desc: 'Pharmacie de garde Lomé' },
      ];

      apps.forEach((app, idx) => {
        const itemY = 720 + idx * 230;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.beginPath();
        ctx.roundRect(60, itemY, 904, 195, 24);
        ctx.fill();

        // Icon Box
        ctx.fillStyle = app.color;
        ctx.beginPath();
        ctx.roundRect(100, itemY + 35, 125, 125, 24);
        ctx.fill();

        // Icon letter
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 64px sans-serif';
        ctx.fillText('EFA'[idx] || 'E', 138, itemY + 122);

        // App Text
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 38px sans-serif';
        ctx.fillText(app.name, 260, itemY + 90);

        ctx.fillStyle = '#94a3b8';
        ctx.font = '30px sans-serif';
        ctx.fillText(app.desc + ' · Web & Android APK', 260, itemY + 138);

        // Action Pill
        ctx.fillStyle = 'rgba(255, 255, 255, 0.16)';
        ctx.beginPath();
        ctx.roundRect(740, itemY + 65, 180, 65, 32);
        ctx.fill();

        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 26px sans-serif';
        ctx.fillText('Ouvrir', 795, itemY + 107);
      });

      // Bottom Bar
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.roundRect(387, 1860, 250, 10, 5);
      ctx.fill();
    }

    drawScreenContent('all');

    const screenTexture = new THREE.CanvasTexture(screenCanvas);
    screenTexture.colorSpace = THREE.SRGBColorSpace;
    screenTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();

    // Update screen texture when activeTab changes
    const updateScreenTexture = () => {
      drawScreenContent(stateRef.current.activeTab);
      screenTexture.needsUpdate = true;
    };

    // --- COMPOSITE PROCEDURAL 3D MODEL (3-12 PARTS) ---
    // Part 1: Main Smartphone Chassis (Rounded Box via Extrude)
    const phoneWidth = 1.25;
    const phoneHeight = 2.45;
    const phoneDepth = 0.09;
    const cornerRadius = 0.14;

    const shape = new THREE.Shape();
    const x = -phoneWidth / 2;
    const y = -phoneHeight / 2;
    const w = phoneWidth;
    const h = phoneHeight;
    const r = cornerRadius;

    shape.moveTo(x + r, y);
    shape.lineTo(x + w - r, y);
    shape.quadraticCurveTo(x + w, y, x + w, y + r);
    shape.lineTo(x + w, y + h - r);
    shape.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    shape.lineTo(x + r, y + h);
    shape.quadraticCurveTo(x, y + h, x, y + h - r);
    shape.lineTo(x, y + r);
    shape.quadraticCurveTo(x, y, x + r, y);

    const extrudeSettings = {
      depth: phoneDepth,
      bevelEnabled: true,
      bevelSegments: 5,
      steps: 1,
      bevelSize: 0.015,
      bevelThickness: 0.015,
    };

    const chassisGeo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    chassisGeo.center();

    // Metallic frame material
    const chassisMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.92,
      roughness: 0.22,
    });
    const phoneBodyMesh = new THREE.Mesh(chassisGeo, chassisMat);
    phoneBodyMesh.castShadow = !isSoftwareGl;
    phoneBodyMesh.receiveShadow = !isSoftwareGl;

    // Part 2: Screen Glass Mesh
    const screenGeo = new THREE.PlaneGeometry(phoneWidth - 0.08, phoneHeight - 0.08);
    const screenMat = new THREE.MeshStandardMaterial({
      map: screenTexture,
      roughness: 0.1,
      metalness: 0.15,
    });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.z = phoneDepth / 2 + 0.018;

    // Part 3: Front Speaker / Dynamic Notch
    const notchGeo = new THREE.CapsuleGeometry(0.015, 0.14, 4, 8);
    notchGeo.rotateZ(Math.PI / 2);
    const notchMat = new THREE.MeshBasicMaterial({ color: 0x020617 });
    const notchMesh = new THREE.Mesh(notchGeo, notchMat);
    notchMesh.position.set(0, phoneHeight / 2 - 0.08, phoneDepth / 2 + 0.02);

    // Part 4: Camera Bump (Back)
    const bumpGeo = new THREE.BoxGeometry(0.48, 0.48, 0.04);
    const bumpMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.85,
      roughness: 0.25,
    });
    const cameraBump = new THREE.Mesh(bumpGeo, bumpMat);
    cameraBump.position.set(-phoneWidth / 2 + 0.35, phoneHeight / 2 - 0.35, -phoneDepth / 2 - 0.02);

    // Part 5: Three Camera Lenses on bump
    const lensGroup = new THREE.Group();
    const lensGeo = new THREE.CylinderGeometry(0.075, 0.075, 0.03, 24);
    lensGeo.rotateX(Math.PI / 2);
    const lensMat = new THREE.MeshStandardMaterial({
      color: 0x030712,
      metalness: 0.95,
      roughness: 0.05,
    });
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x0A3D8F,
      metalness: 0.9,
      roughness: 0.3,
    });

    const lensOffsets = [
      [-0.1, 0.1],
      [0.1, 0.1],
      [-0.1, -0.1],
    ];
    lensOffsets.forEach(([lx, ly]) => {
      const lens = new THREE.Mesh(lensGeo, lensMat);
      lens.position.set(lx, ly, -0.015);

      const ringGeo = new THREE.TorusGeometry(0.075, 0.008, 8, 24);
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.set(lx, ly, -0.025);

      lensGroup.add(lens);
      lensGroup.add(ring);
    });
    cameraBump.add(lensGroup);

    // Assemble Main Phone Assembly
    const phoneAssembly = new THREE.Group();
    phoneAssembly.add(phoneBodyMesh);
    phoneAssembly.add(screenMesh);
    phoneAssembly.add(notchMesh);
    phoneAssembly.add(cameraBump);
    phoneAssembly.position.y = 0.2;
    rootGroup.add(phoneAssembly);

    // Part 6: Floating Satellite Badges (EFA ACONTA, EFA SUITE, EFA GARDE)
    const badgeGroup = new THREE.Group();

    function createBadge(label: string, colorHex: number, iconLetter: string) {
      const bGroup = new THREE.Group();
      // Outer beveled ring
      const ringGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.05, 32);
      ringGeo.rotateX(Math.PI / 2);
      const ringMat = new THREE.MeshStandardMaterial({
        color: colorHex,
        metalness: 0.7,
        roughness: 0.2,
      });
      const badgeDisc = new THREE.Mesh(ringGeo, ringMat);
      badgeDisc.castShadow = !isSoftwareGl;
      bGroup.add(badgeDisc);

      // Procedural canvas for label
      const bCanvas = document.createElement('canvas');
      bCanvas.width = 256;
      bCanvas.height = 256;
      const bctx = bCanvas.getContext('2d')!;
      bctx.fillStyle = '#FFFFFF';
      bctx.beginPath();
      bctx.arc(128, 128, 115, 0, Math.PI * 2);
      bctx.fill();

      bctx.fillStyle = '#0A3D8F';
      bctx.font = 'bold 96px sans-serif';
      bctx.textAlign = 'center';
      bctx.textBaseline = 'middle';
      bctx.fillText(iconLetter, 128, 120);

      bctx.font = 'bold 24px sans-serif';
      bctx.fillStyle = '#1e293b';
      bctx.fillText(label, 128, 195);

      const bTex = new THREE.CanvasTexture(bCanvas);
      bTex.colorSpace = THREE.SRGBColorSpace;

      const faceGeo = new THREE.PlaneGeometry(0.42, 0.42);
      const faceMat = new THREE.MeshBasicMaterial({ map: bTex, transparent: true });
      const faceMesh = new THREE.Mesh(faceGeo, faceMat);
      faceMesh.position.z = 0.03;
      bGroup.add(faceMesh);

      return bGroup;
    }

    const badgeAconta = createBadge('ACONTA', 0x2563eb, 'A');
    badgeAconta.position.set(-1.3, 0.75, 0.35);

    const badgeSuite = createBadge('SUITE', 0x0d9488, 'S');
    badgeSuite.position.set(1.3, 0.45, 0.25);

    const badgeGarde = createBadge('GARDE', 0x4f46e5, 'G');
    badgeGarde.position.set(-0.95, -0.75, 0.4);

    badgeGroup.add(badgeAconta);
    badgeGroup.add(badgeSuite);
    badgeGroup.add(badgeGarde);
    rootGroup.add(badgeGroup);

    // Part 7: Ground Pedestal Disc & Soft Radial Contact Shadow
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 512;
    shadowCanvas.height = 512;
    const sctx = shadowCanvas.getContext('2d')!;
    const shadowGrad = sctx.createRadialGradient(256, 256, 30, 256, 256, 240);
    shadowGrad.addColorStop(0, 'rgba(10, 61, 143, 0.42)');
    shadowGrad.addColorStop(0.5, 'rgba(15, 23, 42, 0.25)');
    shadowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    sctx.fillStyle = shadowGrad;
    sctx.fillRect(0, 0, 512, 512);

    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowGeo = new THREE.PlaneGeometry(3.6, 3.6);
    shadowGeo.rotateX(-Math.PI / 2);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      depthWrite: false,
      opacity: 0.55,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.position.y = -1.25;
    rootGroup.add(shadowMesh);

    // Part 8: Glowing Concentric Precision Ring Pedestal
    const ringGeo = new THREE.RingGeometry(0.85, 0.95, 48);
    ringGeo.rotateX(-Math.PI / 2);
    const ringBaseMat = new THREE.MeshBasicMaterial({
      color: 0x93c5fd,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35,
    });
    const ringBase = new THREE.Mesh(ringGeo, ringBaseMat);
    ringBase.position.y = -1.24;
    rootGroup.add(ringBase);

    // Animation variables
    let clock = new THREE.Clock();
    let frameId = 0;
    let prevTab = 'all';

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Check if tab changed to update canvas texture
      if (stateRef.current.activeTab !== prevTab) {
        prevTab = stateRef.current.activeTab;
        updateScreenTexture();
      }

      // Smooth floating motion
      const floatOffset = Math.sin(elapsed * 1.8) * 0.05;
      phoneAssembly.position.y = 0.2 + floatOffset;

      // Orbit satellite badges gently
      badgeAconta.position.y = 0.75 + Math.sin(elapsed * 2.2 + 0.5) * 0.07;
      badgeSuite.position.y = 0.45 + Math.sin(elapsed * 1.9 + 1.8) * 0.07;
      badgeGarde.position.y = -0.75 + Math.sin(elapsed * 2.5 + 3.1) * 0.06;

      // Exploded View smooth spring damping
      const targetScreenZ = stateRef.current.isExploded ? 0.45 : phoneDepth / 2 + 0.018;
      const targetBumpZ = stateRef.current.isExploded ? -0.42 : -phoneDepth / 2 - 0.02;
      const targetBadgesRadius = stateRef.current.isExploded ? 1.6 : 1.0;

      screenMesh.position.z = THREE.MathUtils.damp(screenMesh.position.z, targetScreenZ, 6, delta);
      cameraBump.position.z = THREE.MathUtils.damp(cameraBump.position.z, targetBumpZ, 6, delta);
      badgeGroup.scale.setScalar(
        THREE.MathUtils.damp(badgeGroup.scale.x, targetBadgesRadius, 5, delta)
      );

      // Auto rotation
      if (stateRef.current.isAutoRotate) {
        rootGroup.rotation.y += delta * 0.35;
      }

      controls.update();
      renderer.render(scene, camera);
    };

    frameId = requestAnimationFrame(animate);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      chassisGeo.dispose();
      screenGeo.dispose();
      shadowGeo.dispose();
      ringGeo.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  const resetCameraView = (angle: 'front' | 'angled' | 'top') => {
    setIsAutoRotate(false);
    if (angle === 'front') {
      // Look straight at device screen
      const root = mountRef.current;
      if (root) {
        setIsExploded(false);
      }
    }
  };

  return (
    <div className="relative w-full h-[520px] md:h-[580px] bg-gradient-to-b from-[#E8F1FF]/60 via-white to-slate-50/80 rounded-2xl border border-slate-200/80 shadow-inner overflow-hidden select-none">
      {/* Top minimal status indicator */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 bg-white/90 border border-slate-200/90 rounded-lg shadow-xs text-xs font-medium text-slate-700">
        <Sparkles className="w-3.5 h-3.5 text-[#0A3D8F]" />
        <span>Vue 3D Interactive · Écosystème EFA Tech</span>
      </div>

      {/* 3D WebGL Canvas Container */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Unified Ergonomic Bottom Dock (Collapsible, <=15% footprint) */}
      <div
        className={`absolute bottom-3 left-1/2 -translate-x-1/2 z-20 w-[94%] max-w-lg transition-transform duration-300 ${
          isDockCollapsed ? 'translate-y-[calc(100%-28px)]' : 'translate-y-0'
        }`}
      >
        {/* Toggle Collapse Button */}
        <div className="flex justify-center mb-1">
          <button
            onClick={() => setIsDockCollapsed(!isDockCollapsed)}
            className="flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-full shadow-xs hover:bg-slate-50 transition-colors"
          >
            {isDockCollapsed ? (
              <>
                <ChevronUp className="w-3.5 h-3.5 text-[#0A3D8F]" />
                <span>Afficher les commandes 3D</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
                <span>Masquer les commandes</span>
              </>
            )}
          </button>
        </div>

        {/* Dock Card */}
        <div className="p-2.5 bg-white border border-slate-200 rounded-xl shadow-lg">
          {/* Solution Selector Tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg mb-2 text-xs font-medium text-slate-600">
            <button
              onClick={() => setActiveTab('all')}
              className={`flex-1 py-1 px-2 rounded-md transition-colors ${
                activeTab === 'all'
                  ? 'bg-white text-[#0A3D8F] font-bold shadow-xs'
                  : 'hover:text-slate-900'
              }`}
            >
              Vue Globale
            </button>
            <button
              onClick={() => setActiveTab('aconta')}
              className={`flex-1 py-1 px-2 rounded-md transition-colors ${
                activeTab === 'aconta'
                  ? 'bg-white text-[#0A3D8F] font-bold shadow-xs'
                  : 'hover:text-slate-900'
              }`}
            >
              ACONTA
            </button>
            <button
              onClick={() => setActiveTab('suite')}
              className={`flex-1 py-1 px-2 rounded-md transition-colors ${
                activeTab === 'suite'
                  ? 'bg-white text-[#0A3D8F] font-bold shadow-xs'
                  : 'hover:text-slate-900'
              }`}
            >
              SUITE
            </button>
            <button
              onClick={() => setActiveTab('garde')}
              className={`flex-1 py-1 px-2 rounded-md transition-colors ${
                activeTab === 'garde'
                  ? 'bg-white text-[#0A3D8F] font-bold shadow-xs'
                  : 'hover:text-slate-900'
              }`}
            >
              GARDE
            </button>
          </div>

          {/* Interactive controls */}
          <div className="flex items-center justify-between gap-2 text-xs">
            <button
              onClick={() => setIsAutoRotate(!isAutoRotate)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-medium transition-colors ${
                isAutoRotate
                  ? 'bg-[#E8F1FF] text-[#0A3D8F] border-blue-200'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>{isAutoRotate ? 'Rotation active' : 'Rotation arrêtée'}</span>
            </button>

            <button
              onClick={() => setIsExploded(!isExploded)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-medium transition-colors ${
                isExploded
                  ? 'bg-[#0A3D8F] text-white border-[#0A3D8F]'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{isExploded ? 'Vue assemblée' : 'Mode Éclaté'}</span>
            </button>

            <span className="hidden sm:inline text-[11px] text-slate-400">
              Glissez pour faire pivoter
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
