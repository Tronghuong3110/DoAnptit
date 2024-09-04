package com.doantotnghiepptit.GiaoLuuCauLong.model.dto;

import jakarta.persistence.*;
import lombok.Data;

@Data

public class Complex {
    private Long id;
    private String name;
    private Integer quantityCourts;
    private String carpetColor;
    private String description;

}
