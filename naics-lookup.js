/* ===================================================================
   NAICS Lookup · Singer Lewak
   No external service calls. All data bundled in this file.
   =================================================================== */

(function () {
  'use strict';

  // ===== NAICS DATA =====
  var naicsCodes = [
    { code: "111110", description: "Soybean Farming" },
    { code: "111120", description: "Oilseed (except Soybean) Farming" },
    { code: "111130", description: "Dry Pea and Bean Farming" },
    { code: "111140", description: "Wheat Farming" },
    { code: "111150", description: "Corn Farming" },
    { code: "111160", description: "Rice Farming" },
    { code: "111191", description: "Oilseed and Grain Combination Farming" },
    { code: "111199", description: "All Other Grain Farming" },
    { code: "111211", description: "Potato Farming" },
    { code: "111219", description: "Other Vegetable (except Potato) and Melon Farming" },
    { code: "111310", description: "Orange Groves" },
    { code: "111320", description: "Citrus (except Orange) Groves" },
    { code: "111331", description: "Apple Orchards" },
    { code: "111332", description: "Grape Vineyards" },
    { code: "111333", description: "Strawberry Farming" },
    { code: "111334", description: "Berry (except Strawberry) Farming" },
    { code: "111335", description: "Tree Nut Farming" },
    { code: "111336", description: "Fruit and Tree Nut Combination Farming" },
    { code: "111339", description: "Other Noncitrus Fruit Farming" },
    { code: "111411", description: "Mushroom Production" },
    { code: "111419", description: "Other Food Crops Grown Under Cover" },
    { code: "111421", description: "Nursery and Tree Production" },
    { code: "111422", description: "Floriculture Production" },
    { code: "111910", description: "Tobacco Farming" },
    { code: "111920", description: "Cotton Farming" },
    { code: "111930", description: "Sugarcane Farming" },
    { code: "111940", description: "Hay Farming" },
    { code: "111991", description: "Sugar Beet Farming" },
    { code: "111992", description: "Peanut Farming" },
    { code: "111998", description: "All Other Miscellaneous Crop Farming" },
    { code: "112111", description: "Beef Cattle Ranching and Farming" },
    { code: "112112", description: "Cattle Feedlots" },
    { code: "112120", description: "Dairy Cattle and Milk Production" },
    { code: "112130", description: "Dual-Purpose Cattle Ranching and Farming" },
    { code: "112210", description: "Hog and Pig Farming" },
    { code: "112310", description: "Chicken Egg Production" },
    { code: "112320", description: "Broilers and Other Meat Type Chicken Production" },
    { code: "112330", description: "Turkey Production" },
    { code: "112340", description: "Poultry Hatcheries" },
    { code: "112390", description: "Other Poultry Production" },
    { code: "112410", description: "Sheep Farming" },
    { code: "112420", description: "Goat Farming" },
    { code: "112511", description: "Finfish Farming and Fish Hatcheries" },
    { code: "112512", description: "Shellfish Farming" },
    { code: "112519", description: "Other Aquaculture" },
    { code: "112910", description: "Apiculture" },
    { code: "112920", description: "Horses and Other Equine Production" },
    { code: "112930", description: "Fur-Bearing Animal and Rabbit Production" },
    { code: "112990", description: "All Other Animal Production" },
    { code: "113110", description: "Timber Tract Operations" },
    { code: "113210", description: "Forest Nurseries and Gathering of Forest Products" },
    { code: "113310", description: "Logging" },
    { code: "114111", description: "Finfish Fishing" },
    { code: "114112", description: "Shellfish Fishing" },
    { code: "114119", description: "Other Marine Fishing" },
    { code: "114210", description: "Hunting and Trapping" },
    { code: "115111", description: "Cotton Ginning" },
    { code: "115112", description: "Soil Preparation, Planting, and Cultivating" },
    { code: "115113", description: "Crop Harvesting, Primarily by Machine" },
    { code: "115114", description: "Postharvest Crop Activities (except Cotton Ginning)" },
    { code: "115115", description: "Farm Labor Contractors and Crew Leaders" },
    { code: "115116", description: "Farm Management Services" },
    { code: "115210", description: "Support Activities for Animal Production" },
    { code: "115310", description: "Support Activities for Forestry" },
    { code: "211120", description: "Crude Petroleum Extraction" },
    { code: "211130", description: "Natural Gas Extraction" },
    { code: "212114", description: "Surface Coal Mining" },
    { code: "212115", description: "Underground Coal Mining" },
    { code: "212210", description: "Iron Ore Mining" },
    { code: "212220", description: "Gold Ore and Silver Ore Mining" },
    { code: "212230", description: "Copper, Nickel, Lead, and Zinc Mining" },
    { code: "212290", description: "Other Metal Ore Mining" },
    { code: "212311", description: "Dimension Stone Mining and Quarrying" },
    { code: "212312", description: "Crushed and Broken Limestone Mining and Quarrying" },
    { code: "212313", description: "Crushed and Broken Granite Mining and Quarrying" },
    { code: "212319", description: "Other Crushed and Broken Stone Mining and Quarrying" },
    { code: "212321", description: "Construction Sand and Gravel Mining" },
    { code: "212322", description: "Industrial Sand Mining" },
    { code: "212323", description: "Kaolin, Clay, and Ceramic and Refractory Minerals Mining" },
    { code: "212390", description: "Other Nonmetallic Mineral Mining and Quarrying" },
    { code: "213111", description: "Drilling Oil and Gas Wells" },
    { code: "213112", description: "Support Activities for Oil and Gas Operations" },
    { code: "213113", description: "Support Activities for Coal Mining" },
    { code: "213114", description: "Support Activities for Metal Mining" },
    { code: "213115", description: "Support Activities for Nonmetallic Minerals (except Fuels) Mining" },
    { code: "221111", description: "Hydroelectric Power Generation" },
    { code: "221112", description: "Fossil Fuel Electric Power Generation" },
    { code: "221113", description: "Nuclear Electric Power Generation" },
    { code: "221114", description: "Solar Electric Power Generation" },
    { code: "221115", description: "Wind Electric Power Generation" },
    { code: "221116", description: "Geothermal Electric Power Generation" },
    { code: "221117", description: "Biomass Electric Power Generation" },
    { code: "221118", description: "Other Electric Power Generation" },
    { code: "221121", description: "Electric Bulk Power Transmission and Control" },
    { code: "221122", description: "Electric Power Distribution" },
    { code: "221210", description: "Natural Gas Distribution" },
    { code: "221310", description: "Water Supply and Irrigation Systems" },
    { code: "221320", description: "Sewage Treatment Facilities" },
    { code: "221330", description: "Steam and Air-Conditioning Supply" },
    { code: "236115", description: "New Single-Family Housing Construction (except For-Sale Builders)" },
    { code: "236116", description: "New Multifamily Housing Construction (except For-Sale Builders)" },
    { code: "236117", description: "New Housing For-Sale Builders" },
    { code: "236118", description: "Residential Remodelers" },
    { code: "236210", description: "Industrial Building Construction" },
    { code: "236220", description: "Commercial and Institutional Building Construction" },
    { code: "237110", description: "Water and Sewer Line and Related Structures Construction" },
    { code: "237120", description: "Oil and Gas Pipeline and Related Structures Construction" },
    { code: "237130", description: "Power and Communication Line and Related Structures Construction" },
    { code: "237210", description: "Land Subdivision" },
    { code: "237310", description: "Highway, Street, and Bridge Construction" },
    { code: "237990", description: "Other Heavy and Civil Engineering Construction" },
    { code: "238110", description: "Poured Concrete Foundation and Structure Contractors" },
    { code: "238120", description: "Structural Steel and Precast Concrete Contractors" },
    { code: "238130", description: "Framing Contractors" },
    { code: "238140", description: "Masonry Contractors" },
    { code: "238150", description: "Glass and Glazing Contractors" },
    { code: "238160", description: "Roofing Contractors" },
    { code: "238170", description: "Siding Contractors" },
    { code: "238190", description: "Other Foundation, Structure, and Building Exterior Contractors" },
    { code: "238210", description: "Electrical Contractors and Other Wiring Installation Contractors" },
    { code: "238220", description: "Plumbing, Heating, and Air-Conditioning Contractors" },
    { code: "238290", description: "Other Building Equipment Contractors" },
    { code: "238310", description: "Drywall and Insulation Contractors" },
    { code: "238320", description: "Painting and Wall Covering Contractors" },
    { code: "238330", description: "Flooring Contractors" },
    { code: "238340", description: "Tile and Terrazzo Contractors" },
    { code: "238350", description: "Finish Carpentry Contractors" },
    { code: "238390", description: "Other Building Finishing Contractors" },
    { code: "238910", description: "Site Preparation Contractors" },
    { code: "238990", description: "All Other Specialty Trade Contractors" },
    { code: "311111", description: "Dog and Cat Food Manufacturing" },
    { code: "311119", description: "Other Animal Food Manufacturing" },
    { code: "311211", description: "Flour Milling" },
    { code: "311212", description: "Rice Milling" },
    { code: "311213", description: "Malt Manufacturing" },
    { code: "311221", description: "Wet Corn Milling and Starch Manufacturing" },
    { code: "311224", description: "Soybean and Other Oilseed Processing" },
    { code: "311225", description: "Fats and Oils Refining and Blending" },
    { code: "311230", description: "Breakfast Cereal Manufacturing" },
    { code: "311313", description: "Beet Sugar Manufacturing" },
    { code: "311314", description: "Cane Sugar Manufacturing" },
    { code: "311340", description: "Nonchocolate Confectionery Manufacturing" },
    { code: "311351", description: "Chocolate and Confectionery Manufacturing from Cacao Beans" },
    { code: "311352", description: "Confectionery Manufacturing from Purchased Chocolate" },
    { code: "311411", description: "Frozen Fruit, Juice, and Vegetable Manufacturing" },
    { code: "311412", description: "Frozen Specialty Food Manufacturing" },
    { code: "311421", description: "Fruit and Vegetable Canning" },
    { code: "311422", description: "Specialty Canning" },
    { code: "311423", description: "Dried and Dehydrated Food Manufacturing" },
    { code: "311511", description: "Fluid Milk Manufacturing" },
    { code: "311512", description: "Creamery Butter Manufacturing" },
    { code: "311513", description: "Cheese Manufacturing" },
    { code: "311514", description: "Dry, Condensed, and Evaporated Dairy Product Manufacturing" },
    { code: "311520", description: "Ice Cream and Frozen Dessert Manufacturing" },
    { code: "311611", description: "Animal (except Poultry) Slaughtering" },
    { code: "311612", description: "Meat Processed from Carcasses" },
    { code: "311613", description: "Rendering and Meat Byproduct Processing" },
    { code: "311615", description: "Poultry Processing" },
    { code: "311710", description: "Seafood Product Preparation and Packaging" },
    { code: "311811", description: "Retail Bakeries" },
    { code: "311812", description: "Commercial Bakeries" },
    { code: "311813", description: "Frozen Cakes, Pies, and Other Pastries Manufacturing" },
    { code: "311821", description: "Cookie and Cracker Manufacturing" },
    { code: "311824", description: "Dry Pasta, Dough, and Flour Mixes Manufacturing from Purchased Flour" },
    { code: "311830", description: "Tortilla Manufacturing" },
    { code: "311911", description: "Roasted Nuts and Peanut Butter Manufacturing" },
    { code: "311919", description: "Other Snack Food Manufacturing" },
    { code: "311920", description: "Coffee and Tea Manufacturing" },
    { code: "311930", description: "Flavoring Syrup and Concentrate Manufacturing" },
    { code: "311941", description: "Mayonnaise, Dressing, and Other Prepared Sauce Manufacturing" },
    { code: "311942", description: "Spice and Extract Manufacturing" },
    { code: "311991", description: "Perishable Prepared Food Manufacturing" },
    { code: "311999", description: "All Other Miscellaneous Food Manufacturing" },
    { code: "312111", description: "Soft Drink Manufacturing" },
    { code: "312112", description: "Bottled Water Manufacturing" },
    { code: "312113", description: "Ice Manufacturing" },
    { code: "312120", description: "Breweries" },
    { code: "312130", description: "Wineries" },
    { code: "312140", description: "Distilleries" },
    { code: "312230", description: "Tobacco Manufacturing" },
    { code: "313110", description: "Fiber, Yarn, and Thread Mills" },
    { code: "313210", description: "Broadwoven Fabric Mills" },
    { code: "313220", description: "Narrow Fabric Mills and Schiffli Machine Embroidery" },
    { code: "313230", description: "Nonwoven Fabric Mills" },
    { code: "313240", description: "Knit Fabric Mills" },
    { code: "313310", description: "Textile and Fabric Finishing Mills" },
    { code: "313320", description: "Fabric Coating Mills" },
    { code: "314110", description: "Carpet and Rug Mills" },
    { code: "314120", description: "Curtain and Linen Mills" },
    { code: "314910", description: "Textile Bag and Canvas Mills" },
    { code: "314994", description: "Rope, Cordage, Twine, Tire Cord, and Tire Fabric Mills" },
    { code: "314999", description: "All Other Miscellaneous Textile Product Mills" },
    { code: "315120", description: "Apparel Knitting Mills" },
    { code: "315210", description: "Cut and Sew Apparel Contractors" },
    { code: "315250", description: "Cut and Sew Apparel Manufacturing (except Contractors)" },
    { code: "315990", description: "Apparel Accessories and Other Apparel Manufacturing" },
    { code: "316110", description: "Leather and Hide Tanning and Finishing" },
    { code: "316210", description: "Footwear Manufacturing" },
    { code: "316990", description: "Other Leather and Allied Product Manufacturing" },
    { code: "321113", description: "Sawmills" },
    { code: "321114", description: "Wood Preservation" },
    { code: "321211", description: "Hardwood Veneer and Plywood Manufacturing" },
    { code: "321212", description: "Softwood Veneer and Plywood Manufacturing" },
    { code: "321215", description: "Engineered Wood Member Manufacturing" },
    { code: "321219", description: "Reconstituted Wood Product Manufacturing" },
    { code: "321911", description: "Wood Window and Door Manufacturing" },
    { code: "321912", description: "Cut Stock, Resawing Lumber, and Planing" },
    { code: "321918", description: "Other Millwork (including Flooring)" },
    { code: "321920", description: "Wood Container and Pallet Manufacturing" },
    { code: "321991", description: "Manufactured Home (Mobile Home) Manufacturing" },
    { code: "321992", description: "Prefabricated Wood Building Manufacturing" },
    { code: "321999", description: "All Other Miscellaneous Wood Product Manufacturing" },
    { code: "322110", description: "Pulp Mills" },
    { code: "322120", description: "Paper Mills" },
    { code: "322130", description: "Paperboard Mills" },
    { code: "322211", description: "Corrugated and Solid Fiber Box Manufacturing" },
    { code: "322212", description: "Folding Paperboard Box Manufacturing" },
    { code: "322219", description: "Other Paperboard Container Manufacturing" },
    { code: "322220", description: "Paper Bag and Coated and Treated Paper Manufacturing" },
    { code: "322230", description: "Stationery Product Manufacturing" },
    { code: "322291", description: "Sanitary Paper Product Manufacturing" },
    { code: "322299", description: "All Other Converted Paper Product Manufacturing" },
    { code: "323111", description: "Commercial Printing (except Screen and Books)" },
    { code: "323113", description: "Commercial Screen Printing" },
    { code: "323117", description: "Books Printing" },
    { code: "323120", description: "Support Activities for Printing" },
    { code: "324110", description: "Petroleum Refineries" },
    { code: "324121", description: "Asphalt Paving Mixture and Block Manufacturing" },
    { code: "324122", description: "Asphalt Shingle and Coating Materials Manufacturing" },
    { code: "324191", description: "Petroleum Lubricating Oil and Grease Manufacturing" },
    { code: "324199", description: "All Other Petroleum and Coal Products Manufacturing" },
    { code: "325110", description: "Petrochemical Manufacturing" },
    { code: "325120", description: "Industrial Gas Manufacturing" },
    { code: "325130", description: "Synthetic Dye and Pigment Manufacturing" },
    { code: "325180", description: "Other Basic Inorganic Chemical Manufacturing" },
    { code: "325193", description: "Ethyl Alcohol Manufacturing" },
    { code: "325194", description: "Cyclic Crude, Intermediate, and Gum and Wood Chemical Manufacturing" },
    { code: "325199", description: "All Other Basic Organic Chemical Manufacturing" },
    { code: "325211", description: "Plastics Material and Resin Manufacturing" },
    { code: "325212", description: "Synthetic Rubber Manufacturing" },
    { code: "325220", description: "Artificial and Synthetic Fibers and Filaments Manufacturing" },
    { code: "325311", description: "Nitrogenous Fertilizer Manufacturing" },
    { code: "325312", description: "Phosphatic Fertilizer Manufacturing" },
    { code: "325314", description: "Fertilizer (Mixing Only) Manufacturing" },
    { code: "325315", description: "Compost Manufacturing" },
    { code: "325320", description: "Pesticide and Other Agricultural Chemical Manufacturing" },
    { code: "325411", description: "Medicinal and Botanical Manufacturing" },
    { code: "325412", description: "Pharmaceutical Preparation Manufacturing" },
    { code: "325413", description: "In-Vitro Diagnostic Substance Manufacturing" },
    { code: "325414", description: "Biological Product (except Diagnostic) Manufacturing" },
    { code: "325510", description: "Paint and Coating Manufacturing" },
    { code: "325520", description: "Adhesive Manufacturing" },
    { code: "325611", description: "Soap and Other Detergent Manufacturing" },
    { code: "325612", description: "Polish and Other Sanitation Good Manufacturing" },
    { code: "325613", description: "Surface Active Agent Manufacturing" },
    { code: "325620", description: "Toilet Preparation Manufacturing" },
    { code: "325910", description: "Printing Ink Manufacturing" },
    { code: "325920", description: "Explosives Manufacturing" },
    { code: "325991", description: "Custom Compounding of Purchased Resins" },
    { code: "325992", description: "Photographic Film, Paper, Plate, Chemical, and Copy Toner Manufacturing" },
    { code: "325998", description: "All Other Miscellaneous Chemical Product and Preparation Manufacturing" },
    { code: "326111", description: "Plastics Bag and Pouch Manufacturing" },
    { code: "326112", description: "Plastics Packaging Film and Sheet (including Laminated) Manufacturing" },
    { code: "326113", description: "Unlaminated Plastics Film and Sheet (except Packaging) Manufacturing" },
    { code: "326121", description: "Unlaminated Plastics Profile Shape Manufacturing" },
    { code: "326122", description: "Plastics Pipe and Pipe Fitting Manufacturing" },
    { code: "326130", description: "Laminated Plastics Plate, Sheet (except Packaging), and Shape Manufacturing" },
    { code: "326140", description: "Polystyrene Foam Product Manufacturing" },
    { code: "326150", description: "Urethane and Other Foam Product (except Polystyrene) Manufacturing" },
    { code: "326160", description: "Plastics Bottle Manufacturing" },
    { code: "326191", description: "Plastics Plumbing Fixture Manufacturing" },
    { code: "326199", description: "All Other Plastics Product Manufacturing" },
    { code: "326211", description: "Tire Manufacturing (except Retreading)" },
    { code: "326212", description: "Tire Retreading" },
    { code: "326220", description: "Rubber and Plastics Hoses and Belting Manufacturing" },
    { code: "326291", description: "Rubber Product Manufacturing for Mechanical Use" },
    { code: "326299", description: "All Other Rubber Product Manufacturing" },
    { code: "327110", description: "Pottery, Ceramics, and Plumbing Fixture Manufacturing" },
    { code: "327120", description: "Clay Building Material and Refractories Manufacturing" },
    { code: "327211", description: "Flat Glass Manufacturing" },
    { code: "327212", description: "Other Pressed and Blown Glass and Glassware Manufacturing" },
    { code: "327213", description: "Glass Container Manufacturing" },
    { code: "327215", description: "Glass Product Manufacturing Made of Purchased Glass" },
    { code: "327310", description: "Cement Manufacturing" },
    { code: "327320", description: "Ready-Mix Concrete Manufacturing" },
    { code: "327331", description: "Concrete Block and Brick Manufacturing" },
    { code: "327332", description: "Concrete Pipe Manufacturing" },
    { code: "327390", description: "Other Concrete Product Manufacturing" },
    { code: "327410", description: "Lime Manufacturing" },
    { code: "327420", description: "Gypsum Product Manufacturing" },
    { code: "327910", description: "Abrasive Product Manufacturing" },
    { code: "327991", description: "Cut Stone and Stone Product Manufacturing" },
    { code: "327992", description: "Ground or Treated Mineral and Earth Manufacturing" },
    { code: "327993", description: "Mineral Wool Manufacturing" },
    { code: "327999", description: "All Other Miscellaneous Nonmetallic Mineral Product Manufacturing" },
    { code: "331110", description: "Iron and Steel Mills and Ferroalloy Manufacturing" },
    { code: "331210", description: "Iron and Steel Pipe and Tube Manufacturing from Purchased Steel" },
    { code: "331221", description: "Rolled Steel Shape Manufacturing" },
    { code: "331222", description: "Steel Wire Drawing" },
    { code: "331313", description: "Alumina Refining and Primary Aluminum Production" },
    { code: "331314", description: "Secondary Smelting and Alloying of Aluminum" },
    { code: "331315", description: "Aluminum Sheet, Plate, and Foil Manufacturing" },
    { code: "331318", description: "Other Aluminum Rolling, Drawing, and Extruding" },
    { code: "331410", description: "Nonferrous Metal (except Aluminum) Smelting and Refining" },
    { code: "331420", description: "Copper Rolling, Drawing, Extruding, and Alloying" },
    { code: "331491", description: "Nonferrous Metal (except Copper and Aluminum) Rolling, Drawing, and Extruding" },
    { code: "331492", description: "Secondary Smelting, Refining, and Alloying of Nonferrous Metal (except Copper and Aluminum)" },
    { code: "331511", description: "Iron Foundries" },
    { code: "331512", description: "Steel Investment Foundries" },
    { code: "331513", description: "Steel Foundries (except Investment)" },
    { code: "331523", description: "Nonferrous Metal Die-Casting Foundries" },
    { code: "331524", description: "Aluminum Foundries (except Die-Casting)" },
    { code: "331529", description: "Other Nonferrous Metal Foundries (except Die-Casting)" },
    { code: "332111", description: "Iron and Steel Forging" },
    { code: "332112", description: "Nonferrous Forging" },
    { code: "332114", description: "Custom Roll Forming" },
    { code: "332117", description: "Powder Metallurgy Part Manufacturing" },
    { code: "332119", description: "Metal Crown, Closure, and Other Metal Stamping (except Automotive)" },
    { code: "332215", description: "Metal Kitchen Cookware, Utensil, Cutlery, and Flatware (except Precious) Manufacturing" },
    { code: "332216", description: "Saw Blade and Handtool Manufacturing" },
    { code: "332311", description: "Prefabricated Metal Building and Component Manufacturing" },
    { code: "332312", description: "Fabricated Structural Metal Manufacturing" },
    { code: "332313", description: "Plate Work Manufacturing" },
    { code: "332321", description: "Metal Window and Door Manufacturing" },
    { code: "332322", description: "Sheet Metal Work Manufacturing" },
    { code: "332323", description: "Ornamental and Architectural Metal Work Manufacturing" },
    { code: "332410", description: "Power Boiler and Heat Exchanger Manufacturing" },
    { code: "332420", description: "Metal Tank (Heavy Gauge) Manufacturing" },
    { code: "332431", description: "Metal Can Manufacturing" },
    { code: "332439", description: "Other Metal Container Manufacturing" },
    { code: "332510", description: "Hardware Manufacturing" },
    { code: "332613", description: "Spring Manufacturing" },
    { code: "332618", description: "Other Fabricated Wire Product Manufacturing" },
    { code: "332710", description: "Machine Shops" },
    { code: "332721", description: "Precision Turned Product Manufacturing" },
    { code: "332722", description: "Bolt, Nut, Screw, Rivet, and Washer Manufacturing" },
    { code: "332811", description: "Metal Heat Treating" },
    { code: "332812", description: "Metal Coating, Engraving (except Jewelry and Silverware), and Allied Services to Manufacturers" },
    { code: "332813", description: "Electroplating, Plating, Polishing, Anodizing, and Coloring" },
    { code: "332911", description: "Industrial Valve Manufacturing" },
    { code: "332912", description: "Fluid Power Valve and Hose Fitting Manufacturing" },
    { code: "332913", description: "Plumbing Fixture Fitting and Trim Manufacturing" },
    { code: "332919", description: "Other Metal Valve and Pipe Fitting Manufacturing" },
    { code: "332991", description: "Ball and Roller Bearing Manufacturing" },
    { code: "332992", description: "Small Arms Ammunition Manufacturing" },
    { code: "332993", description: "Ammunition (except Small Arms) Manufacturing" },
    { code: "332994", description: "Small Arms, Ordnance, and Ordnance Accessories Manufacturing" },
    { code: "332996", description: "Fabricated Pipe and Pipe Fitting Manufacturing" },
    { code: "332999", description: "All Other Miscellaneous Fabricated Metal Product Manufacturing" },
    { code: "333111", description: "Farm Machinery and Equipment Manufacturing" },
    { code: "333112", description: "Lawn and Garden Tractor and Home Lawn and Garden Equipment Manufacturing" },
    { code: "333120", description: "Construction Machinery Manufacturing" },
    { code: "333131", description: "Mining Machinery and Equipment Manufacturing" },
    { code: "333132", description: "Oil and Gas Field Machinery and Equipment Manufacturing" },
    { code: "333241", description: "Food Product Machinery Manufacturing" },
    { code: "333242", description: "Semiconductor Machinery Manufacturing" },
    { code: "333243", description: "Sawmill, Woodworking, and Paper Machinery Manufacturing" },
    { code: "333248", description: "All Other Industrial Machinery Manufacturing" },
    { code: "333310", description: "Commercial and Service Industry Machinery Manufacturing" },
    { code: "333413", description: "Industrial and Commercial Fan and Blower and Air Purification Equipment Manufacturing" },
    { code: "333414", description: "Heating Equipment (except Warm Air Furnaces) Manufacturing" },
    { code: "333415", description: "Air-Conditioning and Warm Air Heating Equipment and Commercial and Industrial Refrigeration Equipment Manufacturing" },
    { code: "333511", description: "Industrial Mold Manufacturing" },
    { code: "333514", description: "Special Die and Tool, Die Set, Jig, and Fixture Manufacturing" },
    { code: "333515", description: "Cutting Tool and Machine Tool Accessory Manufacturing" },
    { code: "333517", description: "Machine Tool Manufacturing" },
    { code: "333519", description: "Rolling Mill and Other Metalworking Machinery Manufacturing" },
    { code: "333611", description: "Turbine and Turbine Generator Set Units Manufacturing" },
    { code: "333612", description: "Speed Changer, Industrial High-Speed Drive, and Gear Manufacturing" },
    { code: "333613", description: "Mechanical Power Transmission Equipment Manufacturing" },
    { code: "333618", description: "Other Engine Equipment Manufacturing" },
    { code: "333912", description: "Air and Gas Compressor Manufacturing" },
    { code: "333914", description: "Measuring, Dispensing, and Other Pumping Equipment Manufacturing" },
    { code: "333921", description: "Elevator and Moving Stairway Manufacturing" },
    { code: "333922", description: "Conveyor and Conveying Equipment Manufacturing" },
    { code: "333923", description: "Overhead Traveling Crane, Hoist, and Monorail System Manufacturing" },
    { code: "333924", description: "Industrial Truck, Tractor, Trailer, and Stacker Machinery Manufacturing" },
    { code: "333991", description: "Power-Driven Handtool Manufacturing" },
    { code: "333992", description: "Welding and Soldering Equipment Manufacturing" },
    { code: "333993", description: "Packaging Machinery Manufacturing" },
    { code: "333994", description: "Industrial Process Furnace and Oven Manufacturing" },
    { code: "333995", description: "Fluid Power Cylinder and Actuator Manufacturing" },
    { code: "333996", description: "Fluid Power Pump and Motor Manufacturing" },
    { code: "333998", description: "All Other Miscellaneous General Purpose Machinery Manufacturing" },
    { code: "334111", description: "Electronic Computer Manufacturing" },
    { code: "334112", description: "Computer Storage Device Manufacturing" },
    { code: "334118", description: "Computer Terminal and Other Computer Peripheral Equipment Manufacturing" },
    { code: "334210", description: "Telephone Apparatus Manufacturing" },
    { code: "334220", description: "Radio and Television Broadcasting and Wireless Communications Equipment Manufacturing" },
    { code: "334290", description: "Other Communications Equipment Manufacturing" },
    { code: "334310", description: "Audio and Video Equipment Manufacturing" },
    { code: "334412", description: "Bare Printed Circuit Board Manufacturing" },
    { code: "334413", description: "Semiconductor and Related Device Manufacturing" },
    { code: "334416", description: "Capacitor, Resistor, Coil, Transformer, and Other Inductor Manufacturing" },
    { code: "334417", description: "Electronic Connector Manufacturing" },
    { code: "334418", description: "Printed Circuit Assembly (Electronic Assembly) Manufacturing" },
    { code: "334419", description: "Other Electronic Component Manufacturing" },
    { code: "334510", description: "Electromedical and Electrotherapeutic Apparatus Manufacturing" },
    { code: "334511", description: "Search, Detection, Navigation, Guidance, Aeronautical, and Nautical System and Instrument Manufacturing" },
    { code: "334512", description: "Automatic Environmental Control Manufacturing for Residential, Commercial, and Appliance Use" },
    { code: "334513", description: "Instruments and Related Products Manufacturing for Measuring, Displaying, and Controlling Industrial Process Variables" },
    { code: "334514", description: "Totalizing Fluid Meter and Counting Device Manufacturing" },
    { code: "334515", description: "Instrument Manufacturing for Measuring and Testing Electricity and Electrical Signals" },
    { code: "334516", description: "Analytical Laboratory Instrument Manufacturing" },
    { code: "334517", description: "Irradiation Apparatus Manufacturing" },
    { code: "334519", description: "Other Measuring and Controlling Device Manufacturing" },
    { code: "334610", description: "Manufacturing and Reproducing Magnetic and Optical Media" },
    { code: "335131", description: "Residential Electric Lighting Fixture Manufacturing" },
    { code: "335132", description: "Commercial, Industrial, and Institutional Electric Lighting Fixture Manufacturing" },
    { code: "335139", description: "Electric Lamp Bulb and Other Lighting Equipment Manufacturing" },
    { code: "335210", description: "Small Electrical Appliance Manufacturing" },
    { code: "335220", description: "Major Household Appliance Manufacturing" },
    { code: "335311", description: "Power, Distribution, and Specialty Transformer Manufacturing" },
    { code: "335312", description: "Motor and Generator Manufacturing" },
    { code: "335313", description: "Switchgear and Switchboard Apparatus Manufacturing" },
    { code: "335314", description: "Relay and Industrial Control Manufacturing" },
    { code: "335910", description: "Battery Manufacturing" },
    { code: "335921", description: "Fiber Optic Cable Manufacturing" },
    { code: "335929", description: "Other Communication and Energy Wire Manufacturing" },
    { code: "335931", description: "Current-Carrying Wiring Device Manufacturing" },
    { code: "335932", description: "Noncurrent-Carrying Wiring Device Manufacturing" },
    { code: "335991", description: "Carbon and Graphite Product Manufacturing" },
    { code: "335999", description: "All Other Miscellaneous Electrical Equipment and Component Manufacturing" },
    { code: "336110", description: "Automobile and Light Duty Motor Vehicle Manufacturing" },
    { code: "336120", description: "Heavy Duty Truck Manufacturing" },
    { code: "336211", description: "Motor Vehicle Body Manufacturing" },
    { code: "336212", description: "Truck Trailer Manufacturing" },
    { code: "336213", description: "Motor Home Manufacturing" },
    { code: "336214", description: "Travel Trailer and Camper Manufacturing" },
    { code: "336310", description: "Motor Vehicle Gasoline Engine and Engine Parts Manufacturing" },
    { code: "336320", description: "Motor Vehicle Electrical and Electronic Equipment Manufacturing" },
    { code: "336330", description: "Motor Vehicle Steering and Suspension Components (except Spring) Manufacturing" },
    { code: "336340", description: "Motor Vehicle Brake System Manufacturing" },
    { code: "336350", description: "Motor Vehicle Transmission and Power Train Parts Manufacturing" },
    { code: "336360", description: "Motor Vehicle Seating and Interior Trim Manufacturing" },
    { code: "336370", description: "Motor Vehicle Metal Stamping" },
    { code: "336390", description: "Other Motor Vehicle Parts Manufacturing" },
    { code: "336411", description: "Aircraft Manufacturing" },
    { code: "336412", description: "Aircraft Engine and Engine Parts Manufacturing" },
    { code: "336413", description: "Other Aircraft Parts and Auxiliary Equipment Manufacturing" },
    { code: "336414", description: "Guided Missile and Space Vehicle Manufacturing" },
    { code: "336415", description: "Guided Missile and Space Vehicle Propulsion Unit and Propulsion Unit Parts Manufacturing" },
    { code: "336419", description: "Other Guided Missile and Space Vehicle Parts and Auxiliary Equipment Manufacturing" },
    { code: "336510", description: "Railroad Rolling Stock Manufacturing" },
    { code: "336611", description: "Ship Building and Repairing" },
    { code: "336612", description: "Boat Building" },
    { code: "336991", description: "Motorcycle, Bicycle, and Parts Manufacturing" },
    { code: "336992", description: "Military Armored Vehicle, Tank, and Tank Component Manufacturing" },
    { code: "336999", description: "All Other Transportation Equipment Manufacturing" },
    { code: "337110", description: "Wood Kitchen Cabinet and Countertop Manufacturing" },
    { code: "337121", description: "Upholstered Household Furniture Manufacturing" },
    { code: "337122", description: "Nonupholstered Wood Household Furniture Manufacturing" },
    { code: "337126", description: "Household Furniture (except Wood and Upholstered) Manufacturing" },
    { code: "337127", description: "Institutional Furniture Manufacturing" },
    { code: "337211", description: "Wood Office Furniture Manufacturing" },
    { code: "337212", description: "Custom Architectural Woodwork and Millwork Manufacturing" },
    { code: "337214", description: "Office Furniture (except Wood) Manufacturing" },
    { code: "337215", description: "Showcase, Partition, Shelving, and Locker Manufacturing" },
    { code: "337910", description: "Mattress Manufacturing" },
    { code: "337920", description: "Blind and Shade Manufacturing" },
    { code: "339112", description: "Surgical and Medical Instrument Manufacturing" },
    { code: "339113", description: "Surgical Appliance and Supplies Manufacturing" },
    { code: "339114", description: "Dental Equipment and Supplies Manufacturing" },
    { code: "339115", description: "Ophthalmic Goods Manufacturing" },
    { code: "339116", description: "Dental Laboratories" },
    { code: "339910", description: "Jewelry and Silverware Manufacturing" },
    { code: "339920", description: "Sporting and Athletic Goods Manufacturing" },
    { code: "339930", description: "Doll, Toy, and Game Manufacturing" },
    { code: "339940", description: "Office Supplies (except Paper) Manufacturing" },
    { code: "339950", description: "Sign Manufacturing" },
    { code: "339991", description: "Gasket, Packing, and Sealing Device Manufacturing" },
    { code: "339992", description: "Musical Instrument Manufacturing" },
    { code: "339993", description: "Fastener, Button, Needle, and Pin Manufacturing" },
    { code: "339994", description: "Broom, Brush, and Mop Manufacturing" },
    { code: "339995", description: "Burial Casket Manufacturing" },
    { code: "339999", description: "All Other Miscellaneous Manufacturing" },
    { code: "423110", description: "Automobile and Other Motor Vehicle Merchant Wholesalers" },
    { code: "423120", description: "Motor Vehicle Supplies and New Parts Merchant Wholesalers" },
    { code: "423130", description: "Tire and Tube Merchant Wholesalers" },
    { code: "423140", description: "Motor Vehicle Parts (Used) Merchant Wholesalers" },
    { code: "423210", description: "Furniture Merchant Wholesalers" },
    { code: "423220", description: "Home Furnishing Merchant Wholesalers" },
    { code: "423310", description: "Lumber, Plywood, Millwork, and Wood Panel Merchant Wholesalers" },
    { code: "423320", description: "Brick, Stone, and Related Construction Material Merchant Wholesalers" },
    { code: "423330", description: "Roofing, Siding, and Insulation Material Merchant Wholesalers" },
    { code: "423390", description: "Other Construction Material Merchant Wholesalers" },
    { code: "423410", description: "Photographic Equipment and Supplies Merchant Wholesalers" },
    { code: "423420", description: "Office Equipment Merchant Wholesalers" },
    { code: "423430", description: "Computer and Computer Peripheral Equipment and Software Merchant Wholesalers" },
    { code: "423440", description: "Other Commercial Equipment Merchant Wholesalers" },
    { code: "423450", description: "Medical, Dental, and Hospital Equipment and Supplies Merchant Wholesalers" },
    { code: "423460", description: "Ophthalmic Goods Merchant Wholesalers" },
    { code: "423490", description: "Other Professional Equipment and Supplies Merchant Wholesalers" },
    { code: "423510", description: "Metal Service Centers and Other Metal Merchant Wholesalers" },
    { code: "423520", description: "Coal and Other Mineral and Ore Merchant Wholesalers" },
    { code: "423610", description: "Electrical Apparatus and Equipment, Wiring Supplies, and Related Equipment Merchant Wholesalers" },
    { code: "423620", description: "Household Appliances, Electric Housewares, and Consumer Electronics Merchant Wholesalers" },
    { code: "423690", description: "Other Electronic Parts and Equipment Merchant Wholesalers" },
    { code: "423710", description: "Hardware Merchant Wholesalers" },
    { code: "423720", description: "Plumbing and Heating Equipment and Supplies (Hydronics) Merchant Wholesalers" },
    { code: "423730", description: "Warm Air Heating and Air-Conditioning Equipment and Supplies Merchant Wholesalers" },
    { code: "423740", description: "Refrigeration Equipment and Supplies Merchant Wholesalers" },
    { code: "423810", description: "Construction and Mining (except Oil Well) Machinery and Equipment Merchant Wholesalers" },
    { code: "423820", description: "Farm and Garden Machinery and Equipment Merchant Wholesalers" },
    { code: "423830", description: "Industrial Machinery and Equipment Merchant Wholesalers" },
    { code: "423840", description: "Industrial Supplies Merchant Wholesalers" },
    { code: "423850", description: "Service Establishment Equipment and Supplies Merchant Wholesalers" },
    { code: "423860", description: "Transportation Equipment and Supplies (except Motor Vehicle) Merchant Wholesalers" },
    { code: "423910", description: "Sporting and Recreational Goods and Supplies Merchant Wholesalers" },
    { code: "423920", description: "Toy and Hobby Goods and Supplies Merchant Wholesalers" },
    { code: "423930", description: "Recyclable Material Merchant Wholesalers" },
    { code: "423940", description: "Jewelry, Watch, Precious Stone, and Precious Metal Merchant Wholesalers" },
    { code: "423990", description: "Other Miscellaneous Durable Goods Merchant Wholesalers" },
    { code: "424110", description: "Printing and Writing Paper Merchant Wholesalers" },
    { code: "424120", description: "Stationery and Office Supplies Merchant Wholesalers" },
    { code: "424130", description: "Industrial and Personal Service Paper Merchant Wholesalers" },
    { code: "424210", description: "Drugs and Druggists' Sundries Merchant Wholesalers" },
    { code: "424310", description: "Piece Goods, Notions, and Other Dry Goods Merchant Wholesalers" },
    { code: "424340", description: "Footwear Merchant Wholesalers" },
    { code: "424350", description: "Clothing and Clothing Accessories Merchant Wholesalers" },
    { code: "424410", description: "General Line Grocery Merchant Wholesalers" },
    { code: "424420", description: "Packaged Frozen Food Merchant Wholesalers" },
    { code: "424430", description: "Dairy Product (except Dried or Canned) Merchant Wholesalers" },
    { code: "424440", description: "Poultry and Poultry Product Merchant Wholesalers" },
    { code: "424450", description: "Confectionery Merchant Wholesalers" },
    { code: "424460", description: "Fish and Seafood Merchant Wholesalers" },
    { code: "424470", description: "Meat and Meat Product Merchant Wholesalers" },
    { code: "424480", description: "Fresh Fruit and Vegetable Merchant Wholesalers" },
    { code: "424490", description: "Other Grocery and Related Products Merchant Wholesalers" },
    { code: "424510", description: "Grain and Field Bean Merchant Wholesalers" },
    { code: "424520", description: "Livestock Merchant Wholesalers" },
    { code: "424590", description: "Other Farm Product Raw Material Merchant Wholesalers" },
    { code: "424610", description: "Plastics Materials and Basic Forms and Shapes Merchant Wholesalers" },
    { code: "424690", description: "Other Chemical and Allied Products Merchant Wholesalers" },
    { code: "424710", description: "Petroleum Bulk Stations and Terminals" },
    { code: "424720", description: "Petroleum and Petroleum Products Merchant Wholesalers (except Bulk Stations and Terminals)" },
    { code: "424810", description: "Beer and Ale Merchant Wholesalers" },
    { code: "424820", description: "Wine and Distilled Alcoholic Beverage Merchant Wholesalers" },
    { code: "424910", description: "Farm Supplies Merchant Wholesalers" },
    { code: "424920", description: "Book, Periodical, and Newspaper Merchant Wholesalers" },
    { code: "424930", description: "Flower, Nursery Stock, and Florists' Supplies Merchant Wholesalers" },
    { code: "424940", description: "Tobacco Product and Electronic Cigarette Merchant Wholesalers" },
    { code: "424950", description: "Paint, Varnish, and Supplies Merchant Wholesalers" },
    { code: "424990", description: "Other Miscellaneous Nondurable Goods Merchant Wholesalers" },
    { code: "425120", description: "Wholesale Trade Agents and Brokers" },
    { code: "441110", description: "New Car Dealers" },
    { code: "441120", description: "Used Car Dealers" },
    { code: "441210", description: "Recreational Vehicle Dealers" },
    { code: "441222", description: "Boat Dealers" },
    { code: "441227", description: "Motorcycle, ATV, and All Other Motor Vehicle Dealers" },
    { code: "441330", description: "Automotive Parts and Accessories Retailers" },
    { code: "441340", description: "Tire Dealers" },
    { code: "444110", description: "Home Centers" },
    { code: "444120", description: "Paint and Wallpaper Retailers" },
    { code: "444140", description: "Hardware Retailers" },
    { code: "444180", description: "Other Building Material Dealers" },
    { code: "444230", description: "Outdoor Power Equipment Retailers" },
    { code: "444240", description: "Nursery, Garden Center, and Farm Supply Retailers" },
    { code: "445110", description: "Supermarkets and Other Grocery Retailers (except Convenience Retailers)" },
    { code: "445131", description: "Convenience Retailers" },
    { code: "445132", description: "Vending Machine Operators" },
    { code: "445230", description: "Fruit and Vegetable Retailers" },
    { code: "445240", description: "Meat Retailers" },
    { code: "445250", description: "Fish and Seafood Retailers" },
    { code: "445291", description: "Baked Goods Retailers" },
    { code: "445292", description: "Confectionery and Nut Retailers" },
    { code: "445298", description: "All Other Specialty Food Retailers" },
    { code: "445320", description: "Beer, Wine, and Liquor Retailers" },
    { code: "449110", description: "Furniture Retailers" },
    { code: "449121", description: "Floor Covering Retailers" },
    { code: "449122", description: "Window Treatment Retailers" },
    { code: "449129", description: "All Other Home Furnishings Retailers" },
    { code: "449210", description: "Electronics and Appliance Retailers" },
    { code: "455110", description: "Department Stores" },
    { code: "455211", description: "Warehouse Clubs and Supercenters" },
    { code: "455219", description: "All Other General Merchandise Retailers" },
    { code: "456110", description: "Pharmacies and Drug Retailers" },
    { code: "456120", description: "Cosmetics, Beauty Supplies, and Perfume Retailers" },
    { code: "456130", description: "Optical Goods Retailers" },
    { code: "456191", description: "Food (Health) Supplement Retailers" },
    { code: "456199", description: "All Other Health and Personal Care Retailers" },
    { code: "457110", description: "Gasoline Stations with Convenience Stores" },
    { code: "457120", description: "Other Gasoline Stations" },
    { code: "457210", description: "Fuel Dealers" },
    { code: "458110", description: "Clothing and Clothing Accessories Retailers" },
    { code: "458210", description: "Shoe Retailers" },
    { code: "458310", description: "Jewelry Retailers" },
    { code: "458320", description: "Luggage and Leather Goods Retailers" },
    { code: "459110", description: "Sporting Goods Retailers" },
    { code: "459120", description: "Hobby, Toy, and Game Retailers" },
    { code: "459130", description: "Sewing, Needlework, and Piece Goods Retailers" },
    { code: "459140", description: "Musical Instrument and Supplies Retailers" },
    { code: "459210", description: "Book Retailers and News Dealers" },
    { code: "459310", description: "Florists" },
    { code: "459410", description: "Office Supplies and Stationery Retailers" },
    { code: "459420", description: "Gift, Novelty, and Souvenir Retailers" },
    { code: "459510", description: "Used Merchandise Retailers" },
    { code: "459910", description: "Pet and Pet Supplies Retailers" },
    { code: "459920", description: "Art Dealers" },
    { code: "459930", description: "Manufactured (Mobile) Home Dealers" },
    { code: "459991", description: "Tobacco, Electronic Cigarette, and Other Smoking Supplies Retailers" },
    { code: "459999", description: "All Other Miscellaneous Retailers" },
    { code: "481111", description: "Scheduled Passenger Air Transportation" },
    { code: "481112", description: "Scheduled Freight Air Transportation" },
    { code: "481211", description: "Nonscheduled Chartered Passenger Air Transportation" },
    { code: "481212", description: "Nonscheduled Chartered Freight Air Transportation" },
    { code: "481219", description: "Other Nonscheduled Air Transportation" },
    { code: "482111", description: "Line-Haul Railroads" },
    { code: "482112", description: "Short Line Railroads" },
    { code: "483111", description: "Deep Sea Freight Transportation" },
    { code: "483112", description: "Deep Sea Passenger Transportation" },
    { code: "483113", description: "Coastal and Great Lakes Freight Transportation" },
    { code: "483114", description: "Coastal and Great Lakes Passenger Transportation" },
    { code: "483211", description: "Inland Water Freight Transportation" },
    { code: "483212", description: "Inland Water Passenger Transportation" },
    { code: "484110", description: "General Freight Trucking, Local" },
    { code: "484121", description: "General Freight Trucking, Long-Distance, Truckload" },
    { code: "484122", description: "General Freight Trucking, Long-Distance, Less Than Truckload" },
    { code: "484210", description: "Used Household and Office Goods Moving" },
    { code: "484220", description: "Specialized Freight (except Used Goods) Trucking, Local" },
    { code: "484230", description: "Specialized Freight (except Used Goods) Trucking, Long-Distance" },
    { code: "485111", description: "Mixed Mode Transit Systems" },
    { code: "485112", description: "Commuter Rail Systems" },
    { code: "485113", description: "Bus and Other Motor Vehicle Transit Systems" },
    { code: "485119", description: "Other Urban Transit Systems" },
    { code: "485210", description: "Interurban and Rural Bus Transportation" },
    { code: "485310", description: "Taxi and Ridesharing Services" },
    { code: "485320", description: "Limousine Service" },
    { code: "485410", description: "School and Employee Bus Transportation" },
    { code: "485510", description: "Charter Bus Industry" },
    { code: "485991", description: "Special Needs Transportation" },
    { code: "485999", description: "All Other Transit and Ground Passenger Transportation" },
    { code: "486110", description: "Pipeline Transportation of Crude Oil" },
    { code: "486210", description: "Pipeline Transportation of Natural Gas" },
    { code: "486910", description: "Pipeline Transportation of Refined Petroleum Products" },
    { code: "486990", description: "All Other Pipeline Transportation" },
    { code: "487110", description: "Scenic and Sightseeing Transportation, Land" },
    { code: "487210", description: "Scenic and Sightseeing Transportation, Water" },
    { code: "487990", description: "Scenic and Sightseeing Transportation, Other" },
    { code: "488111", description: "Air Traffic Control" },
    { code: "488119", description: "Other Airport Operations" },
    { code: "488190", description: "Other Support Activities for Air Transportation" },
    { code: "488210", description: "Support Activities for Rail Transportation" },
    { code: "488310", description: "Port and Harbor Operations" },
    { code: "488320", description: "Marine Cargo Handling" },
    { code: "488330", description: "Navigational Services to Shipping" },
    { code: "488390", description: "Other Support Activities for Water Transportation" },
    { code: "488410", description: "Motor Vehicle Towing" },
    { code: "488490", description: "Other Support Activities for Road Transportation" },
    { code: "488510", description: "Freight Transportation Arrangement" },
    { code: "488991", description: "Packing and Crating" },
    { code: "488999", description: "All Other Support Activities for Transportation" },
    { code: "491110", description: "Postal Service" },
    { code: "492110", description: "Couriers and Express Delivery Services" },
    { code: "492210", description: "Local Messengers and Local Delivery" },
    { code: "493110", description: "General Warehousing and Storage" },
    { code: "493120", description: "Refrigerated Warehousing and Storage" },
    { code: "493130", description: "Farm Product Warehousing and Storage" },
    { code: "493190", description: "Other Warehousing and Storage" },
    { code: "512110", description: "Motion Picture and Video Production" },
    { code: "512120", description: "Motion Picture and Video Distribution" },
    { code: "512131", description: "Motion Picture Theaters (except Drive-Ins)" },
    { code: "512132", description: "Drive-In Motion Picture Theaters" },
    { code: "512191", description: "Teleproduction and Other Postproduction Services" },
    { code: "512199", description: "Other Motion Picture and Video Industries" },
    { code: "512230", description: "Music Publishers" },
    { code: "512240", description: "Sound Recording Studios" },
    { code: "512250", description: "Record Production and Distribution" },
    { code: "512290", description: "Other Sound Recording Industries" },
    { code: "513110", description: "Newspaper Publishers" },
    { code: "513120", description: "Periodical Publishers" },
    { code: "513130", description: "Book Publishers" },
    { code: "513140", description: "Directory and Mailing List Publishers" },
    { code: "513191", description: "Greeting Card Publishers" },
    { code: "513199", description: "All Other Publishers" },
    { code: "513210", description: "Software Publishers" },
    { code: "516110", description: "Radio Broadcasting Stations" },
    { code: "516120", description: "Television Broadcasting Stations" },
    { code: "516210", description: "Media Streaming Distribution Services, Social Networks, and Other Media Networks and Content Providers" },
    { code: "517111", description: "Wired Telecommunications Carriers" },
    { code: "517112", description: "Wireless Telecommunications Carriers (except Satellite)" },
    { code: "517121", description: "Telecommunications Resellers" },
    { code: "517122", description: "Agents for Wireless Telecommunications Services" },
    { code: "517410", description: "Satellite Telecommunications" },
    { code: "517810", description: "All Other Telecommunications" },
    { code: "518210", description: "Computing Infrastructure Providers, Data Processing, Web Hosting, and Related Services" },
    { code: "519210", description: "Libraries and Archives" },
    { code: "519290", description: "Web Search Portals and All Other Information Services" },
    { code: "521110", description: "Monetary Authorities-Central Bank" },
    { code: "522110", description: "Commercial Banking" },
    { code: "522130", description: "Credit Unions" },
    { code: "522180", description: "Savings Institutions and Other Depository Credit Intermediation" },
    { code: "522210", description: "Credit Card Issuing" },
    { code: "522220", description: "Sales Financing" },
    { code: "522291", description: "Consumer Lending" },
    { code: "522292", description: "Real Estate Credit" },
    { code: "522299", description: "International, Secondary Market, and All Other Nondepository Credit Intermediation" },
    { code: "522310", description: "Mortgage and Nonmortgage Loan Brokers" },
    { code: "522320", description: "Financial Transactions Processing, Reserve, and Clearinghouse Activities" },
    { code: "522390", description: "Other Activities Related to Credit Intermediation" },
    { code: "523150", description: "Investment Banking and Securities Intermediation" },
    { code: "523160", description: "Commodity Contracts Intermediation" },
    { code: "523210", description: "Securities and Commodity Exchanges" },
    { code: "523910", description: "Miscellaneous Intermediation" },
    { code: "523940", description: "Portfolio Management and Investment Advice" },
    { code: "523991", description: "Trust, Fiduciary, and Custody Activities" },
    { code: "523999", description: "Miscellaneous Financial Investment Activities" },
    { code: "524113", description: "Direct Life Insurance Carriers" },
    { code: "524114", description: "Direct Health and Medical Insurance Carriers" },
    { code: "524126", description: "Direct Property and Casualty Insurance Carriers" },
    { code: "524127", description: "Direct Title Insurance Carriers" },
    { code: "524128", description: "Other Direct Insurance (except Life, Health, and Medical) Carriers" },
    { code: "524130", description: "Reinsurance Carriers" },
    { code: "524210", description: "Insurance Agencies and Brokerages" },
    { code: "524291", description: "Claims Adjusting" },
    { code: "524292", description: "Pharmacy Benefit Management and Other Third Party Administration of Insurance and Pension Funds" },
    { code: "524298", description: "All Other Insurance Related Activities" },
    { code: "525110", description: "Pension Funds" },
    { code: "525120", description: "Health and Welfare Funds" },
    { code: "525190", description: "Other Insurance Funds" },
    { code: "525910", description: "Open-End Investment Funds" },
    { code: "525920", description: "Trusts, Estates, and Agency Accounts" },
    { code: "525990", description: "Other Financial Vehicles" },
    { code: "531110", description: "Lessors of Residential Buildings and Dwellings" },
    { code: "531120", description: "Lessors of Nonresidential Buildings (except Miniwarehouses)" },
    { code: "531130", description: "Lessors of Miniwarehouses and Self-Storage Units" },
    { code: "531190", description: "Lessors of Other Real Estate Property" },
    { code: "531210", description: "Offices of Real Estate Agents and Brokers" },
    { code: "531311", description: "Residential Property Managers" },
    { code: "531312", description: "Nonresidential Property Managers" },
    { code: "531320", description: "Offices of Real Estate Appraisers" },
    { code: "531390", description: "Other Activities Related to Real Estate" },
    { code: "532111", description: "Passenger Car Rental" },
    { code: "532112", description: "Passenger Car Leasing" },
    { code: "532120", description: "Truck, Utility Trailer, and RV (Recreational Vehicle) Rental and Leasing" },
    { code: "532210", description: "Consumer Electronics and Appliances Rental" },
    { code: "532281", description: "Formal Wear and Costume Rental" },
    { code: "532282", description: "Video Tape and Disc Rental" },
    { code: "532283", description: "Home Health Equipment Rental" },
    { code: "532284", description: "Recreational Goods Rental" },
    { code: "532289", description: "All Other Consumer Goods Rental" },
    { code: "532310", description: "General Rental Centers" },
    { code: "532411", description: "Commercial Air, Rail, and Water Transportation Equipment Rental and Leasing" },
    { code: "532412", description: "Construction, Mining, and Forestry Machinery and Equipment Rental and Leasing" },
    { code: "532420", description: "Office Machinery and Equipment Rental and Leasing" },
    { code: "532490", description: "Other Commercial and Industrial Machinery and Equipment Rental and Leasing" },
    { code: "533110", description: "Lessors of Nonfinancial Intangible Assets (except Copyrighted Works)" },
    { code: "541110", description: "Offices of Lawyers" },
    { code: "541120", description: "Offices of Notaries" },
    { code: "541191", description: "Title Abstract and Settlement Offices" },
    { code: "541199", description: "All Other Legal Services" },
    { code: "541211", description: "Offices of Certified Public Accountants" },
    { code: "541213", description: "Tax Preparation Services" },
    { code: "541214", description: "Payroll Services" },
    { code: "541219", description: "Other Accounting Services" },
    { code: "541310", description: "Architectural Services" },
    { code: "541320", description: "Landscape Architectural Services" },
    { code: "541330", description: "Engineering Services" },
    { code: "541340", description: "Drafting Services" },
    { code: "541350", description: "Building Inspection Services" },
    { code: "541360", description: "Geophysical Surveying and Mapping Services" },
    { code: "541370", description: "Surveying and Mapping (except Geophysical) Services" },
    { code: "541380", description: "Testing Laboratories and Services" },
    { code: "541410", description: "Interior Design Services" },
    { code: "541420", description: "Industrial Design Services" },
    { code: "541430", description: "Graphic Design Services" },
    { code: "541490", description: "Other Specialized Design Services" },
    { code: "541511", description: "Custom Computer Programming Services" },
    { code: "541512", description: "Computer Systems Design Services" },
    { code: "541513", description: "Computer Facilities Management Services" },
    { code: "541519", description: "Other Computer Related Services" },
    { code: "541611", description: "Administrative Management and General Management Consulting Services" },
    { code: "541612", description: "Human Resources Consulting Services" },
    { code: "541613", description: "Marketing Consulting Services" },
    { code: "541614", description: "Process, Physical Distribution, and Logistics Consulting Services" },
    { code: "541618", description: "Other Management Consulting Services" },
    { code: "541620", description: "Environmental Consulting Services" },
    { code: "541690", description: "Other Scientific and Technical Consulting Services" },
    { code: "541713", description: "Research and Development in Nanotechnology" },
    { code: "541714", description: "Research and Development in Biotechnology (except Nanobiotechnology)" },
    { code: "541715", description: "Research and Development in the Physical, Engineering, and Life Sciences (except Nanotechnology and Biotechnology)" },
    { code: "541720", description: "Research and Development in the Social Sciences and Humanities" },
    { code: "541810", description: "Advertising Agencies" },
    { code: "541820", description: "Public Relations Agencies" },
    { code: "541830", description: "Media Buying Agencies" },
    { code: "541840", description: "Media Representatives" },
    { code: "541850", description: "Indoor and Outdoor Display Advertising" },
    { code: "541860", description: "Direct Mail Advertising" },
    { code: "541870", description: "Advertising Material Distribution Services" },
    { code: "541890", description: "Other Services Related to Advertising" },
    { code: "541910", description: "Marketing Research and Public Opinion Polling" },
    { code: "541921", description: "Photography Studios, Portrait" },
    { code: "541922", description: "Commercial Photography" },
    { code: "541930", description: "Translation and Interpretation Services" },
    { code: "541940", description: "Veterinary Services" },
    { code: "541990", description: "All Other Professional, Scientific, and Technical Services" },
    { code: "551111", description: "Offices of Bank Holding Companies" },
    { code: "551112", description: "Offices of Other Holding Companies" },
    { code: "551114", description: "Corporate, Subsidiary, and Regional Managing Offices" },
    { code: "561110", description: "Office Administrative Services" },
    { code: "561210", description: "Facilities Support Services" },
    { code: "561311", description: "Employment Placement Agencies" },
    { code: "561312", description: "Executive Search Services" },
    { code: "561320", description: "Temporary Help Services" },
    { code: "561330", description: "Professional Employer Organizations" },
    { code: "561410", description: "Document Preparation Services" },
    { code: "561421", description: "Telephone Answering Services" },
    { code: "561422", description: "Telemarketing Bureaus and Other Contact Centers" },
    { code: "561431", description: "Private Mail Centers" },
    { code: "561439", description: "Other Business Service Centers (including Copy Shops)" },
    { code: "561440", description: "Collection Agencies" },
    { code: "561450", description: "Credit Bureaus" },
    { code: "561491", description: "Repossession Services" },
    { code: "561492", description: "Court Reporting and Stenotype Services" },
    { code: "561499", description: "All Other Business Support Services" },
    { code: "561510", description: "Travel Agencies" },
    { code: "561520", description: "Tour Operators" },
    { code: "561591", description: "Convention and Visitors Bureaus" },
    { code: "561599", description: "All Other Travel Arrangement and Reservation Services" },
    { code: "561611", description: "Investigation and Personal Background Check Services" },
    { code: "561612", description: "Security Guards and Patrol Services" },
    { code: "561613", description: "Armored Car Services" },
    { code: "561621", description: "Security Systems Services (except Locksmiths)" },
    { code: "561622", description: "Locksmiths" },
    { code: "561710", description: "Exterminating and Pest Control Services" },
    { code: "561720", description: "Janitorial Services" },
    { code: "561730", description: "Landscaping Services" },
    { code: "561740", description: "Carpet and Upholstery Cleaning Services" },
    { code: "561790", description: "Other Services to Buildings and Dwellings" },
    { code: "561910", description: "Packaging and Labeling Services" },
    { code: "561920", description: "Convention and Trade Show Organizers" },
    { code: "561990", description: "All Other Support Services" },
    { code: "562111", description: "Solid Waste Collection" },
    { code: "562112", description: "Hazardous Waste Collection" },
    { code: "562119", description: "Other Waste Collection" },
    { code: "562211", description: "Hazardous Waste Treatment and Disposal" },
    { code: "562212", description: "Solid Waste Landfill" },
    { code: "562213", description: "Solid Waste Combustors and Incinerators" },
    { code: "562219", description: "Other Nonhazardous Waste Treatment and Disposal" },
    { code: "562910", description: "Remediation Services" },
    { code: "562920", description: "Materials Recovery Facilities" },
    { code: "562991", description: "Septic Tank and Related Services" },
    { code: "562998", description: "All Other Miscellaneous Waste Management Services" },
    { code: "611110", description: "Elementary and Secondary Schools" },
    { code: "611210", description: "Junior Colleges" },
    { code: "611310", description: "Colleges, Universities, and Professional Schools" },
    { code: "611410", description: "Business and Secretarial Schools" },
    { code: "611420", description: "Computer Training" },
    { code: "611430", description: "Professional and Management Development Training" },
    { code: "611511", description: "Cosmetology and Barber Schools" },
    { code: "611512", description: "Flight Training" },
    { code: "611513", description: "Apprenticeship Training" },
    { code: "611519", description: "Other Technical and Trade Schools" },
    { code: "611610", description: "Fine Arts Schools" },
    { code: "611620", description: "Sports and Recreation Instruction" },
    { code: "611630", description: "Language Schools" },
    { code: "611691", description: "Exam Preparation and Tutoring" },
    { code: "611692", description: "Automobile Driving Schools" },
    { code: "611699", description: "All Other Miscellaneous Schools and Instruction" },
    { code: "611710", description: "Educational Support Services" },
    { code: "621111", description: "Offices of Physicians (except Mental Health Specialists)" },
    { code: "621112", description: "Offices of Physicians, Mental Health Specialists" },
    { code: "621210", description: "Offices of Dentists" },
    { code: "621310", description: "Offices of Chiropractors" },
    { code: "621320", description: "Offices of Optometrists" },
    { code: "621330", description: "Offices of Mental Health Practitioners (except Physicians)" },
    { code: "621340", description: "Offices of Physical, Occupational and Speech Therapists, and Audiologists" },
    { code: "621391", description: "Offices of Podiatrists" },
    { code: "621399", description: "Offices of All Other Miscellaneous Health Practitioners" },
    { code: "621410", description: "Family Planning Centers" },
    { code: "621420", description: "Outpatient Mental Health and Substance Abuse Centers" },
    { code: "621491", description: "HMO Medical Centers" },
    { code: "621492", description: "Kidney Dialysis Centers" },
    { code: "621493", description: "Freestanding Ambulatory Surgical and Emergency Centers" },
    { code: "621498", description: "All Other Outpatient Care Centers" },
    { code: "621511", description: "Medical Laboratories" },
    { code: "621512", description: "Diagnostic Imaging Centers" },
    { code: "621610", description: "Home Health Care Services" },
    { code: "621910", description: "Ambulance Services" },
    { code: "621991", description: "Blood and Organ Banks" },
    { code: "621999", description: "All Other Miscellaneous Ambulatory Health Care Services" },
    { code: "622110", description: "General Medical and Surgical Hospitals" },
    { code: "622210", description: "Psychiatric and Substance Abuse Hospitals" },
    { code: "622310", description: "Specialty (except Psychiatric and Substance Abuse) Hospitals" },
    { code: "623110", description: "Nursing Care Facilities (Skilled Nursing Facilities)" },
    { code: "623210", description: "Residential Intellectual and Developmental Disability Facilities" },
    { code: "623220", description: "Residential Mental Health and Substance Abuse Facilities" },
    { code: "623311", description: "Continuing Care Retirement Communities" },
    { code: "623312", description: "Assisted Living Facilities for the Elderly" },
    { code: "623990", description: "Other Residential Care Facilities" },
    { code: "624110", description: "Child and Youth Services" },
    { code: "624120", description: "Services for the Elderly and Persons with Disabilities" },
    { code: "624190", description: "Other Individual and Family Services" },
    { code: "624210", description: "Community Food Services" },
    { code: "624221", description: "Temporary Shelters" },
    { code: "624229", description: "Other Community Housing Services" },
    { code: "624230", description: "Emergency and Other Relief Services" },
    { code: "624310", description: "Vocational Rehabilitation Services" },
    { code: "624410", description: "Child Care Services" },
    { code: "711110", description: "Theater Companies and Dinner Theaters" },
    { code: "711120", description: "Dance Companies" },
    { code: "711130", description: "Musical Groups and Artists" },
    { code: "711190", description: "Other Performing Arts Companies" },
    { code: "711211", description: "Sports Teams and Clubs" },
    { code: "711212", description: "Racetracks" },
    { code: "711219", description: "Other Spectator Sports" },
    { code: "711310", description: "Promoters of Performing Arts, Sports, and Similar Events with Facilities" },
    { code: "711320", description: "Promoters of Performing Arts, Sports, and Similar Events without Facilities" },
    { code: "711410", description: "Agents and Managers for Artists, Athletes, Entertainers, and Other Public Figures" },
    { code: "711510", description: "Independent Artists, Writers, and Performers" },
    { code: "712110", description: "Museums" },
    { code: "712120", description: "Historical Sites" },
    { code: "712130", description: "Zoos and Botanical Gardens" },
    { code: "712190", description: "Nature Parks and Other Similar Institutions" },
    { code: "713110", description: "Amusement and Theme Parks" },
    { code: "713120", description: "Amusement Arcades" },
    { code: "713210", description: "Casinos (except Casino Hotels)" },
    { code: "713290", description: "Other Gambling Industries" },
    { code: "713910", description: "Golf Courses and Country Clubs" },
    { code: "713920", description: "Skiing Facilities" },
    { code: "713930", description: "Marinas" },
    { code: "713940", description: "Fitness and Recreational Sports Centers" },
    { code: "713950", description: "Bowling Centers" },
    { code: "713990", description: "All Other Amusement and Recreation Industries" },
    { code: "721110", description: "Hotels (except Casino Hotels) and Motels" },
    { code: "721120", description: "Casino Hotels" },
    { code: "721191", description: "Bed-and-Breakfast Inns" },
    { code: "721199", description: "All Other Traveler Accommodation" },
    { code: "721211", description: "RV (Recreational Vehicle) Parks and Campgrounds" },
    { code: "721214", description: "Recreational and Vacation Camps (except Campgrounds)" },
    { code: "721310", description: "Rooming and Boarding Houses, Dormitories, and Workers' Camps" },
    { code: "722310", description: "Food Service Contractors" },
    { code: "722320", description: "Caterers" },
    { code: "722330", description: "Mobile Food Services" },
    { code: "722410", description: "Drinking Places (Alcoholic Beverages)" },
    { code: "722511", description: "Full-Service Restaurants" },
    { code: "722513", description: "Limited-Service Restaurants" },
    { code: "722514", description: "Cafeterias, Grill Buffets, and Buffets" },
    { code: "722515", description: "Snack and Nonalcoholic Beverage Bars" },
    { code: "811111", description: "General Automotive Repair" },
    { code: "811114", description: "Specialized Automotive Repair" },
    { code: "811121", description: "Automotive Body, Paint, and Interior Repair and Maintenance" },
    { code: "811122", description: "Automotive Glass Replacement Shops" },
    { code: "811191", description: "Automotive Oil Change and Lubrication Shops" },
    { code: "811192", description: "Car Washes" },
    { code: "811198", description: "All Other Automotive Repair and Maintenance" },
    { code: "811210", description: "Electronic and Precision Equipment Repair and Maintenance" },
    { code: "811310", description: "Commercial and Industrial Machinery and Equipment (except Automotive and Electronic) Repair and Maintenance" },
    { code: "811411", description: "Home and Garden Equipment Repair and Maintenance" },
    { code: "811412", description: "Appliance Repair and Maintenance" },
    { code: "811420", description: "Reupholstery and Furniture Repair" },
    { code: "811430", description: "Footwear and Leather Goods Repair" },
    { code: "811490", description: "Other Personal and Household Goods Repair and Maintenance" },
    { code: "812111", description: "Barber Shops" },
    { code: "812112", description: "Beauty Salons" },
    { code: "812113", description: "Nail Salons" },
    { code: "812191", description: "Diet and Weight Reducing Centers" },
    { code: "812199", description: "Other Personal Care Services" },
    { code: "812210", description: "Funeral Homes and Funeral Services" },
    { code: "812220", description: "Cemeteries and Crematories" },
    { code: "812310", description: "Coin-Operated Laundries and Drycleaners" },
    { code: "812320", description: "Drycleaning and Laundry Services (except Coin-Operated)" },
    { code: "812331", description: "Linen Supply" },
    { code: "812332", description: "Industrial Launderers" },
    { code: "812910", description: "Pet Care (except Veterinary) Services" },
    { code: "812921", description: "Photofinishing Laboratories (except One-Hour)" },
    { code: "812922", description: "One-Hour Photofinishing" },
    { code: "812930", description: "Parking Lots and Garages" },
    { code: "812990", description: "All Other Personal Services" },
    { code: "813110", description: "Religious Organizations" },
    { code: "813211", description: "Grantmaking Foundations" },
    { code: "813212", description: "Voluntary Health Organizations" },
    { code: "813219", description: "Other Grantmaking and Giving Services" },
    { code: "813311", description: "Human Rights Organizations" },
    { code: "813312", description: "Environment, Conservation and Wildlife Organizations" },
    { code: "813319", description: "Other Social Advocacy Organizations" },
    { code: "813410", description: "Civic and Social Organizations" },
    { code: "813910", description: "Business Associations" },
    { code: "813920", description: "Professional Organizations" },
    { code: "813930", description: "Labor Unions and Similar Labor Organizations" },
    { code: "813940", description: "Political Organizations" },
    { code: "813990", description: "Other Similar Organizations (except Business, Professional, Labor, and Political Organizations)" },
    { code: "814110", description: "Private Households" },
    { code: "921110", description: "Executive Offices" },
    { code: "921120", description: "Legislative Bodies" },
    { code: "921130", description: "Public Finance Activities" },
    { code: "921140", description: "Executive and Legislative Offices, Combined" },
    { code: "921150", description: "American Indian and Alaska Native Tribal Governments" },
    { code: "921190", description: "Other General Government Support" },
    { code: "922110", description: "Courts" },
    { code: "922120", description: "Police Protection" },
    { code: "922130", description: "Legal Counsel and Prosecution" },
    { code: "922140", description: "Correctional Institutions" },
    { code: "922150", description: "Parole Offices and Probation Offices" },
    { code: "922160", description: "Fire Protection" },
    { code: "922190", description: "Other Justice, Public Order, and Safety Activities" },
    { code: "923110", description: "Administration of Education Programs" },
    { code: "923120", description: "Administration of Public Health Programs" },
    { code: "923130", description: "Administration of Human Resource Programs (except Education, Public Health, and Veterans' Affairs Programs)" },
    { code: "923140", description: "Administration of Veterans' Affairs" },
    { code: "924110", description: "Administration of Air and Water Resource and Solid Waste Management Programs" },
    { code: "924120", description: "Administration of Conservation Programs" },
    { code: "925110", description: "Administration of Housing Programs" },
    { code: "925120", description: "Administration of Urban Planning and Community and Rural Development" },
    { code: "926110", description: "Administration of General Economic Programs" },
    { code: "926120", description: "Regulation and Administration of Transportation Programs" },
    { code: "926130", description: "Regulation and Administration of Communications, Electric, Gas, and Other Utilities" },
    { code: "926140", description: "Regulation of Agricultural Marketing and Commodities" },
    { code: "926150", description: "Regulation, Licensing, and Inspection of Miscellaneous Commercial Sectors" },
    { code: "927110", description: "Space Research and Technology" },
    { code: "928110", description: "National Security" },
    { code: "928120", description: "International Affairs" },
    { code: "960000", description: "Litigation" },
    { code: "970000", description: "Bankruptcy and Related" },
    { code: "990000", description: "Individuals" }
];

  // ===== CATEGORIES =====
  var categories = [
    { prefix: '54',    label: 'Professional Services' },
    { prefix: '62',    label: 'Health Care' },
    { prefix: '23',    label: 'Construction' },
    { prefix: '52',    label: 'Finance & Insurance' },
    { prefix: '53',    label: 'Real Estate' },
    { prefix: '51',    label: 'Information' },
    { prefix: '31-33', label: 'Manufacturing' },
    { prefix: '44-45', label: 'Retail Trade' },
    { prefix: '72',    label: 'Food Services' },
    { prefix: '48-49', label: 'Transportation' },
    { prefix: '11',    label: 'Agriculture' },
    { prefix: '81',    label: 'Other Services' }
  ];

  // Top 5 industries Singer Lewak serves
  var featured = [
    { code: '541213', label: 'Individual Tax Services' },
    { code: '531311', label: 'Real Estate Management' },
    { code: '525920', label: 'Trusts & Estates' },
    { code: '541511', label: 'Technology Services' },
    { code: '512110', label: 'Film & TV Production' }
  ];

  // ===== STATE =====
  var state = {
    query: '',
    activeCategory: null,
    selected: null,
    focusedIndex: -1,
    results: [],
    recent: []
  };

  // ===== DOM =====
  function $(id) { return document.getElementById(id); }
  var searchInput, searchClear, resultsBody, resultsTitle, resultsCount;
  var selectedBar, sbCode, sbDesc, copyBtn, copyLabel, clearBtn;
  var catGrid, featuredList, clearCat, toast, toastText;
  var recentSection, recentChips, clearRecent;

  function cacheDom() {
    searchInput    = $('searchInput');
    searchClear    = $('searchClear');
    resultsBody    = $('resultsBody');
    resultsTitle   = $('resultsTitle');
    resultsCount   = $('resultsCount');
    selectedBar    = $('selectedBar');
    sbCode         = $('sbCode');
    sbDesc         = $('sbDesc');
    copyBtn        = $('copyBtn');
    copyLabel      = $('copyLabel');
    clearBtn       = $('clearBtn');
    catGrid        = $('catGrid');
    featuredList   = $('featuredList');
    clearCat       = $('clearCat');
    toast          = $('toast');
    toastText      = $('toastText');
    recentSection  = $('recentSection');
    recentChips    = $('recentChips');
    clearRecent    = $('clearRecent');
  }

  // ===== RENDER =====
  function renderFeatured() {
    var html = '';
    for (var i = 0; i < featured.length; i++) {
      var f = featured[i];
      html += '<button class="featured-item" data-code="' + f.code + '" type="button">' +
              '<span class="featured-code">' + f.code + '</span>' +
              '<span class="featured-label">' + escapeHtml(f.label) + '</span>' +
              '</button>';
    }
    featuredList.innerHTML = html;
    var items = featuredList.querySelectorAll('.featured-item');
    for (var j = 0; j < items.length; j++) {
      items[j].addEventListener('click', onFeaturedClick);
    }
  }

  function onFeaturedClick(e) {
    var code = e.currentTarget.getAttribute('data-code');
    var item = findByCode(code);
    if (item) selectCode(item.code, item.description);
  }

  function renderCategories() {
    var html = '';
    for (var i = 0; i < categories.length; i++) {
      var c = categories[i];
      html += '<button class="cat-btn" data-prefix="' + c.prefix + '" type="button">' +
              '<span class="cat-num">' + c.prefix + '</span>' +
              escapeHtml(c.label) +
              '</button>';
    }
    catGrid.innerHTML = html;
    var btns = catGrid.querySelectorAll('.cat-btn');
    for (var j = 0; j < btns.length; j++) {
      btns[j].addEventListener('click', onCatClick);
    }
  }

  function onCatClick(e) {
    var prefix = e.currentTarget.getAttribute('data-prefix');
    if (state.activeCategory === prefix) {
      setCategory(null);
    } else {
      setCategory(prefix);
    }
  }

  function setCategory(prefix) {
    state.activeCategory = prefix;
    state.query = '';
    searchInput.value = '';
    searchClear.classList.remove('visible');
    var btns = document.querySelectorAll('.cat-btn');
    for (var i = 0; i < btns.length; i++) {
      if (btns[i].getAttribute('data-prefix') === prefix) {
        btns[i].classList.add('active');
      } else {
        btns[i].classList.remove('active');
      }
    }
    if (prefix) clearCat.classList.add('visible');
    else clearCat.classList.remove('visible');
    applyFilters();
  }

  function applyFilters() {
    var results = naicsCodes;

    if (state.activeCategory) {
      var p = state.activeCategory;
      if (p.indexOf('-') !== -1) {
        var parts = p.split('-');
        var start = parseInt(parts[0], 10);
        var end = parseInt(parts[1], 10);
        results = filterArray(results, function (item) {
          var c = parseInt(item.code.substring(0, 2), 10);
          return c >= start && c <= end;
        });
      } else {
        results = filterArray(results, function (item) {
          return item.code.indexOf(p) === 0;
        });
      }
    }

    if (state.query) {
      var q = state.query.toLowerCase();
      results = filterArray(results, function (item) {
        return item.description.toLowerCase().indexOf(q) !== -1 ||
               item.code.indexOf(q) !== -1;
      });
    }

    state.results = results;
    state.focusedIndex = -1;

    if (state.activeCategory && state.query) {
      var cat = findCategory(state.activeCategory);
      resultsTitle.textContent = '"' + state.query + '" in ' + cat.label;
    } else if (state.activeCategory) {
      var cat2 = findCategory(state.activeCategory);
      resultsTitle.textContent = cat2.label;
    } else if (state.query) {
      resultsTitle.textContent = 'Results for "' + state.query + '"';
    } else {
      resultsTitle.textContent = 'All Codes';
    }

    renderResults(results);
  }

  function renderResults(results) {
    var plural = results.length === 1 ? 'code' : 'codes';
    resultsCount.innerHTML = '<strong>' + formatNum(results.length) + '</strong> ' + plural;

    if (results.length === 0) {
      resultsBody.innerHTML =
        '<div class="empty">' +
        '<svg class="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="12"></line><line x1="11" y1="16" x2="11.01" y2="16"></line></svg>' +
        '<h3>No matches found</h3>' +
        '<p>Try a different keyword or clear your filters.</p>' +
        '</div>';
      return;
    }

    var toRender = results.slice(0, 200);
    var q = state.query.toLowerCase();
    var html = '';
    for (var i = 0; i < toRender.length; i++) {
      var item = toRender[i];
      var isSelected = state.selected && state.selected.code === item.code;
      var descHtml = highlight(item.description, q);
      var codeHtml = highlight(item.code, q);
      html += '<div class="result-row' + (isSelected ? ' selected' : '') + '" ' +
              'data-index="' + i + '" role="option" ' +
              'aria-selected="' + (isSelected ? 'true' : 'false') + '" tabindex="-1">' +
              '<div class="result-code">' + codeHtml + '</div>' +
              '<div class="result-desc">' + descHtml + '</div>' +
              '</div>';
    }

    if (results.length > 200) {
      html += '<div class="overflow-note">Showing first 200 of ' + formatNum(results.length) + ' results. Refine your search to narrow down.</div>';
    }

    resultsBody.innerHTML = html;

    var rows = resultsBody.querySelectorAll('.result-row');
    for (var j = 0; j < rows.length; j++) {
      rows[j].addEventListener('click', onRowClick);
      rows[j].addEventListener('mouseenter', onRowHover);
    }
  }

  function onRowClick(e) {
    var i = parseInt(e.currentTarget.getAttribute('data-index'), 10);
    var item = state.results.slice(0, 200)[i];
    if (item) selectCode(item.code, item.description);
  }

  function onRowHover(e) {
    var i = parseInt(e.currentTarget.getAttribute('data-index'), 10);
    setFocus(i, false);
  }

  // ===== SELECTION =====
  function selectCode(code, description) {
    state.selected = { code: code, description: description };
    sbCode.textContent = code;
    sbDesc.textContent = description;
    selectedBar.classList.add('visible');
    copyLabel.textContent = 'Copy';
    copyBtn.classList.remove('copied');

    var rows = document.querySelectorAll('.result-row');
    var visibleResults = state.results.slice(0, 200);
    for (var i = 0; i < rows.length; i++) {
      var idx = parseInt(rows[i].getAttribute('data-index'), 10);
      var match = visibleResults[idx] && visibleResults[idx].code === code;
      if (match) {
        rows[i].classList.add('selected');
        rows[i].setAttribute('aria-selected', 'true');
      } else {
        rows[i].classList.remove('selected');
        rows[i].setAttribute('aria-selected', 'false');
      }
    }

    var featItems = document.querySelectorAll('.featured-item');
    for (var k = 0; k < featItems.length; k++) {
      if (featItems[k].getAttribute('data-code') === code) {
        featItems[k].classList.add('selected');
      } else {
        featItems[k].classList.remove('selected');
      }
    }

    addRecent({ code: code, description: description });
  }

  function clearSelection() {
    state.selected = null;
    selectedBar.classList.remove('visible');
    var rows = document.querySelectorAll('.result-row');
    for (var i = 0; i < rows.length; i++) rows[i].classList.remove('selected');
    var featItems = document.querySelectorAll('.featured-item');
    for (var j = 0; j < featItems.length; j++) featItems[j].classList.remove('selected');
  }

  function copySelected() {
    if (!state.selected) return;
    var text = state.selected.code + ' - ' + state.selected.description;

    var fallback = function () {
      try {
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', '');
        ta.style.position = 'absolute';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        var ok = document.execCommand('copy');
        document.body.removeChild(ta);
        return ok;
      } catch (err) {
        return false;
      }
    };

    var onSuccess = function () {
      copyLabel.textContent = 'Copied';
      copyBtn.classList.add('copied');
      showToast('Copied ' + state.selected.code);
      setTimeout(function () {
        copyLabel.textContent = 'Copy';
        copyBtn.classList.remove('copied');
      }, 1800);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(onSuccess, function () {
        if (fallback()) onSuccess();
        else showToast('Copy failed - please try again');
      });
    } else {
      if (fallback()) onSuccess();
      else showToast('Copy failed - please try again');
    }
  }

  function showToast(msg) {
    toastText.textContent = msg;
    toast.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(function () {
      toast.classList.remove('show');
    }, 2000);
  }

  // ===== RECENT =====
  function addRecent(item) {
    state.recent = filterArray(state.recent, function (r) { return r.code !== item.code; });
    state.recent.unshift(item);
    if (state.recent.length > 6) state.recent = state.recent.slice(0, 6);
    renderRecent();
  }

  function renderRecent() {
    if (state.recent.length === 0) {
      recentSection.classList.add('hidden');
      return;
    }
    recentSection.classList.remove('hidden');
    var html = '';
    for (var i = 0; i < state.recent.length; i++) {
      var r = state.recent[i];
      html += '<button class="recent-chip" data-code="' + r.code +
              '" type="button" title="' + escapeHtml(r.description) + '">' +
              r.code + '</button>';
    }
    recentChips.innerHTML = html;
    var chips = recentChips.querySelectorAll('.recent-chip');
    for (var j = 0; j < chips.length; j++) {
      chips[j].addEventListener('click', onRecentClick);
    }
  }

  function onRecentClick(e) {
    var code = e.currentTarget.getAttribute('data-code');
    var item = null;
    for (var i = 0; i < state.recent.length; i++) {
      if (state.recent[i].code === code) { item = state.recent[i]; break; }
    }
    if (item) selectCode(item.code, item.description);
  }

  // ===== KEYBOARD NAV =====
  function setFocus(i, scroll) {
    var rows = document.querySelectorAll('.result-row');
    for (var j = 0; j < rows.length; j++) rows[j].classList.remove('focused');
    if (i < 0) { state.focusedIndex = -1; return; }
    state.focusedIndex = i;
    if (rows[i]) {
      rows[i].classList.add('focused');
      if (scroll !== false) rows[i].scrollIntoView({ block: 'nearest' });
    }
  }

  // ===== EVENTS =====
  function bindEvents() {
    searchInput.addEventListener('input', function (e) {
      state.query = e.target.value.replace(/^\s+|\s+$/g, '');
      if (state.query.length > 0) searchClear.classList.add('visible');
      else searchClear.classList.remove('visible');
      applyFilters();
    });

    searchClear.addEventListener('click', function () {
      searchInput.value = '';
      state.query = '';
      searchClear.classList.remove('visible');
      applyFilters();
      searchInput.focus();
    });

    copyBtn.addEventListener('click', copySelected);
    clearBtn.addEventListener('click', clearSelection);
    clearCat.addEventListener('click', function () { setCategory(null); });
    clearRecent.addEventListener('click', function () {
      state.recent = [];
      renderRecent();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === '/' && document.activeElement !== searchInput) {
        e.preventDefault();
        searchInput.focus();
        searchInput.select();
        return;
      }

      var rows = document.querySelectorAll('.result-row');
      if (!rows.length) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        var next = state.focusedIndex + 1;
        if (next >= rows.length) next = rows.length - 1;
        setFocus(next);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        var prev = state.focusedIndex - 1;
        if (prev < 0) prev = 0;
        setFocus(prev);
      } else if (e.key === 'Enter' && state.focusedIndex >= 0) {
        e.preventDefault();
        var item = state.results.slice(0, 200)[state.focusedIndex];
        if (item) selectCode(item.code, item.description);
      } else if (e.key === 'Escape') {
        if (state.query || state.activeCategory) {
          searchInput.value = '';
          state.query = '';
          searchClear.classList.remove('visible');
          setCategory(null);
        } else if (state.selected) {
          clearSelection();
        }
        searchInput.blur();
      }
    });

    document.addEventListener('keydown', function (e) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'c' && state.selected &&
          document.activeElement !== searchInput) {
        var sel = window.getSelection();
        if (sel && sel.toString()) return;
        e.preventDefault();
        copySelected();
      }
    });
  }

  // ===== UTILITIES =====
  function filterArray(arr, fn) {
    var out = [];
    for (var i = 0; i < arr.length; i++) {
      if (fn(arr[i])) out.push(arr[i]);
    }
    return out;
  }
  function findByCode(code) {
    for (var i = 0; i < naicsCodes.length; i++) {
      if (naicsCodes[i].code === code) return naicsCodes[i];
    }
    return null;
  }
  function findCategory(prefix) {
    for (var i = 0; i < categories.length; i++) {
      if (categories[i].prefix === prefix) return categories[i];
    }
    return null;
  }
  function formatNum(n) {
    return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function escapeRegex(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  function highlight(text, q) {
    if (!q) return escapeHtml(text);
    var safe = escapeHtml(text);
    var safeQ = escapeRegex(q);
    var re = new RegExp('(' + safeQ + ')', 'ig');
    return safe.replace(re, '<mark>$1</mark>');
  }

  // ===== INIT =====
  function init() {
    cacheDom();
    $('totalCount').textContent = formatNum(naicsCodes.length);
    renderFeatured();
    renderCategories();
    renderRecent();
    renderResults(naicsCodes);
    bindEvents();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
